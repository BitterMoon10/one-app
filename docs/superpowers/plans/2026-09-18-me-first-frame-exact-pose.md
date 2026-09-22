# /me 第一帧严格姿势与统一风格 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在不修改 `real-02.jpg` 至 `real-10.jpg` 的前提下，生成并接入第一帧：人物小比例、侧视仰卧、双手把深色手机举在脸上方、屏幕朝脸发光，同时保留宽景卧室、床尾美短起司猫（棕金/奶油色经典虎斑、圆脸、短密毛、白胸白爪）和其他陈设，并沿用 2-10 帧的 Counterfeit flat minimal 视觉语言。

**Architecture:** 使用现有 `manga-pipeline` 的 Counterfeit + ControlNet 生成链，不再把 animagine 成品直接当最终画面。先生成明确的侧视仰卧双臂/手机骨架指南，再用同一套 `STYLE`、`CHARACTER`、`NEG` 词和 Counterfeit 批量生成候选；候选通过人工目检后，只对床尾猫做局部 inpaint，最后缩放/色彩校正接入 `real-01.jpg`。页面代码只调整第一帧焦点位置，不改变播放器行为和其他帧。

**Tech Stack:** ComfyUI 0.33、本地 `Counterfeit-V2.5_fp16.safetensors`、`openpose-sd15`/`depth-sd15`/`scribble-sd15` ControlNet、Python/Pillow/OpenCV、React/Vite、Puppeteer。

---

### Task 1: 固化与 2-10 帧一致的风格基线

**Files:**
- Read: `/Users/moonshot/workspace/manga-pipeline/gen-flat.py:26-57`
- Read: `/Users/moonshot/workspace/github/zqlApp/public/anime/real-02.jpg`
- Create: `/Users/moonshot/workspace/manga-pipeline/refs/style-baseline.md`

- [ ] **Step 1: 记录基线参数**

在 `style-baseline.md` 中记录当前 `gen-flat.py` 的 `STYLE`、`CHARACTER`、`NEG` 原文，并记录 `real-02.jpg` 的 `768x512` 尺寸；不得重新设计 2-10 帧的颜色、线条或构图。

- [ ] **Step 2: 验证素材尺寸**

运行：

```bash
cd /Users/moonshot/workspace/github/zqlApp
sips -g pixelWidth -g pixelHeight public/anime/real-02.jpg public/anime/real-10.jpg
```

预期：两张均为 `768x512`；若不是，先在生成脚本中统一输出到 `768x512`，不修改已有帧。

---

### Task 2: 制作严格侧视仰卧双手持机指南

**Files:**
- Create: `/Users/moonshot/workspace/manga-pipeline/refs/exact-side-01.svg`
- Create: `/Users/moonshot/workspace/manga-pipeline/refs/exact-side-01.png`
- Create: `/Users/moonshot/workspace/manga-pipeline/make-exact-side-guide.py`

- [ ] **Step 1: 写入 SVG 指南构图**

`exact-side-01.svg` 必须使用 `viewBox="0 0 768 512"`，并明确画出：

- 房间背景、左侧窗帘晨光、右侧床头柜/台灯、左下植物和墙面画框；
- 床位于画面中下部，床的可见宽度约为画面 55%-65%；
- 床尾美短起司猫（棕金/奶油色经典虎斑、圆脸、短密毛、白胸白爪）的侧面轮廓、白胸、白爪和卷尾；
- 人物位于床右侧且只占画面约 25%-30% 高度，严格侧面；
- 人物背部和肩膀贴床，脸朝上，双肘弯曲，两只手共同握住同一部手机；
- 手机位于脸上方约 20-30px，深色背面朝侧面镜头，屏幕面朝人物；
- 屏幕光只用一个小的浅蓝灰椭圆表示在脸和指尖上；
- 不使用俯视床框、分镜框、第二张床或额外肢体。

SVG 只负责几何结构和轮廓，不把英文 caption 写入图中。

- [ ] **Step 2: 栅格化 SVG**

运行：

```bash
cd /Users/moonshot/workspace/manga-pipeline
node flat-rasterize.js exact-side-01
```

若 `flat-rasterize.js` 只接受数字帧参数，则使用其同样的 Puppeteer 逻辑，将 `refs/exact-side-01.svg` 输出为 `refs/exact-side-01.png`，视口固定 `768x512`。

- [ ] **Step 3: 验证指南**

使用 `ReadMediaFile` 检查人物是否小比例、双手是否都接触同一手机、猫和家具是否可见；不满足任一项时只修改 SVG，不进入模型生成。

---

### Task 3: 用 Counterfeit + 姿势控制批量生成候选

**Files:**
- Create: `/Users/moonshot/workspace/manga-pipeline/gen-first-frame-exact.py`
- Read/Reuse: `/Users/moonshot/workspace/manga-pipeline/gen-flat.py`
- Reuse: `/Users/moonshot/workspace/ComfyUI/models/controlnet/openpose-sd15`
- Reuse: `/Users/moonshot/workspace/ComfyUI/models/controlnet/depth-sd15`

- [ ] **Step 1: 固化生成 prompt**

`gen-first-frame-exact.py` 必须复用 `gen-flat.py` 的 `STYLE`、`CHARACTER` 和 `NEG`，并追加以下正向约束：

```text
strict side profile, lying flat on back, shoulders resting on mattress,
face turned upward, both elbows bent upward, both hands gripping one smartphone,
smartphone directly above the face, dark phone back facing side camera,
phone screen facing down toward eyes, cool screen glow on face and fingertips,
one single person, one cat, one phone
```

负向约束必须包含：

```text
side sleeping, prone, curled, sitting, standing, extra arms, third arm,
multiple phones, phone on bed, phone behind body, screen facing camera,
rear camera glow, two people, two beds, split composition, top-down view
```

- [ ] **Step 2: 固定 workflow**

workflow 必须使用：

- `CheckpointLoaderSimple` → `Counterfeit-V2.5_fp16.safetensors`；
- `EmptyLatentImage` → `768x512`；
- `LoadImage` → `refs/exact-side-01.png`；
- `ControlNetLoader` → 先使用 `openpose-sd15`，再使用 `depth-sd15`；
- `ControlNetApplyAdvanced` → `strength=0.85`、`end_percent=0.9`；
- `KSampler` → `steps=28`、`cfg=6.0`、`euler_ancestral`、`denoise=1.0`；
- 输出前缀 `exact01-<seed>`。

若 OpenPose guide 对双手结构不稳定，先只启用 depth；不得同时放松正向姿势约束和负向额外肢体约束。

- [ ] **Step 3: 批量运行 24 个种子**

运行：

```bash
cd /Users/moonshot/workspace/manga-pipeline
/Users/moonshot/workspace/ComfyUI/.venv/bin/python gen-first-frame-exact.py \
  20261601 20261602 20261603 20261604 20261605 20261606 \
  20261607 20261608 20261609 20261610 20261611 20261612 \
  20261613 20261614 20261615 20261616 20261617 20261618 \
  20261619 20261620 20261621 20261622 20261623 20261624
```

- [ ] **Step 4: 设定硬性选稿条件**

候选必须同时满足：

1. 侧面镜头，不是俯拍；
2. 人物背部贴床、脸朝上；
3. 两只手都能追溯到手机，不能出现第三只手或悬浮手机；
4. 深色机背朝镜头，亮屏面朝人物脸；
5. 人物占比不超过画面高度 35%；
6. 床尾有空间放猫，房间至少出现窗、灯、柜、植物中的三项；
7. 颜色和线条接近 `real-02.jpg`，不使用 animagine 成品直接接入。

任一条件失败即弃用，不靠后期几何贴块补救。

---

### Task 4: 局部补猫并保持人物姿势

**Files:**
- Create: `/Users/moonshot/workspace/manga-pipeline/gen-exact-cat-inpaint.py`
- Output: `/Users/moonshot/workspace/manga-pipeline/out/exact01-cat-*.png`

- [ ] **Step 1: 从通过候选建立床尾 mask**

mask 只覆盖床尾预留区域，人物、手机、枕头、手臂和脸全部保持黑色；mask 使用 8-12px Gaussian blur，不允许覆盖到人物腿或手机。

- [ ] **Step 2: 局部 inpaint 生成美短起司猫（棕金/奶油色经典虎斑、圆脸、短密毛、白胸白爪）**

正向 prompt：

```text
one American Shorthair cheese cat sitting at the foot of the bed,
brown-golden and cream classic tabby coat, round face, short dense fur,
white muzzle, white chest and white paws, striped tail curled, side view, small scale
```

负向 prompt：

```text
solid orange cat, black cat, two cats, dog, human face, extra limbs, text, watermark
```

运行 3 个种子，选出猫轮廓清楚且不遮床尾的版本。

---

### Task 5: 接入并验证页面

**Files:**
- Modify: `/Users/moonshot/workspace/github/zqlApp/public/anime/real-01.jpg`
- Modify: `/Users/moonshot/workspace/github/zqlApp/src/components/effects/AnimePlayer.tsx:21`
- Reuse: `/Users/moonshot/workspace/manga-pipeline/verify-real-01.js`

- [ ] **Step 1: 统一输出规格**

将最终候选裁剪/缩放为 `768x512`，只做与 2-10 帧一致的轻微暖调和尺寸处理，不做重绘、不做几何贴手机。

- [ ] **Step 2: 调整竖屏焦点**

根据手机和脸在最终图中的 x 坐标设置 `FOCUS_X[0]`；桌面端必须保留完整宽景，手机端至少同时保留人物脸和手机，猫可因 `object-cover` 裁切但需尽量保留。

- [ ] **Step 3: 运行验证**

```bash
cd /Users/moonshot/workspace/github/zqlApp
npm run build
npx eslint src/components/effects/AnimePlayer.tsx src/pages/About.tsx src/App.tsx

cd /Users/moonshot/workspace/manga-pipeline
node verify-real-01.js
```

预期：build、eslint、桌面截图和手机截图全部成功；截图中第一帧满足硬性选稿条件。

- [ ] **Step 4: 更新记录**

将候选种子、最终文件、验证结果追加到 `/Users/moonshot/my_kimi/worklogs/zqlApp.md`，完成后追加 `/Users/moonshot/my_kimi/works/2026-09-18.md`。不执行 git commit/push，除非用户明确要求。
