# Sleeping First Frame Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace frame 1 with a quiet strict side-view bedroom scene in the existing Counterfeit/gen-flat visual language, then integrate and verify it in zqlApp.

**Architecture:** Keep the hand-authored SVG as the deterministic composition source and rasterize it with Puppeteer. Extend only the scene prompt to describe the revised sleeping composition, run the existing Counterfeit img2img pipeline for four seeds, select the best candidate by direct visual inspection, and use a local inpaint only if the selected image lacks the cat or phone. Copy the selected image into `public/anime/real-01.jpg`, adjust only frame-1 focus positioning, and verify the Vite page with the supplied Puppeteer script.

**Tech Stack:** SVG, Puppeteer/Chrome, Python ComfyUI API (`gen-flat.py`), Counterfeit-V2.5, React/Vite, ESLint.

---

### Task 1: Update the deterministic flat composition and scene prompt

**Files:**
- Modify: `/Users/moonshot/workspace/github/zqlApp/public/anime/flat-01.svg`
- Modify: `/Users/moonshot/workspace/manga-pipeline/refs/scene-01.txt`
- Create: `/Users/moonshot/workspace/manga-pipeline/refs/flat-01.png`

- [ ] Rewrite the SVG so the bed occupies roughly half the wide canvas, the person is small and still asleep in strict side profile, the phone is on the bedside table or beside the pillow, the foot-of-bed cat is a brown-gold/cream classic tabby American Shorthair with white chest and paws, and only curtain/lamp/table/plant remain as sparse props.
- [ ] Replace the scene prompt with explicit composition constraints and Counterfeit-compatible style language; retain the `no phone in hand` constraint.
- [ ] Rasterize SVG with the existing Puppeteer tooling and confirm the PNG is 768×512.

### Task 2: Generate and inspect Counterfeit candidates

**Files:**
- Modify: `/Users/moonshot/workspace/manga-pipeline/out/sleep01-*.png`

- [ ] Run `gen-flat.py` using the revised `refs/flat-01.png` and scene prompt for at least four distinct seeds, writing the requested `sleep01-*.png` names without overwriting the flat reference.
- [ ] Read every candidate with `ReadMediaFile`; record which candidates visibly satisfy side profile, sleeping posture, small scale, phone placement, cat appearance, sparse room, and negative space.
- [ ] If and only if the selected candidate lacks the cat or phone, create a tight mask around the missing object and run one small Counterfeit inpaint; do not run another large img2img pass.

### Task 3: Integrate the final image and verify the app

**Files:**
- Modify: `/Users/moonshot/workspace/github/zqlApp/public/anime/real-01.jpg`
- Modify: `/Users/moonshot/workspace/github/zqlApp/src/components/effects/AnimePlayer.tsx`
- Create/modify: `/Users/moonshot/workspace/github/zqlApp/out/real01-desktop.png`, `/Users/moonshot/workspace/github/zqlApp/out/real01-mobile.png`

- [ ] Convert/copy the selected 768×512 candidate to `public/anime/real-01.jpg`.
- [ ] Set `FOCUS_X[0]` from the final image's subject position so the frame-1 mobile `object-cover` crop keeps the sleeping person and bed context visible.
- [ ] Start Vite, run `npm run build` and `npm run lint`, then run `node /Users/moonshot/workspace/manga-pipeline/verify-real-01.js` while Vite is running.
- [ ] Inspect generated desktop/mobile screenshots and report actual files, candidate choice, and command results. Do not commit or push.
