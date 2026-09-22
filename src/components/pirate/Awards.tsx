import { AWARDS } from './data';

/**
 * 获奖记录：虚线分隔的紧凑文字行（不要卡片），戏仿奖项
 */
const Awards = () => (
  <section aria-label="获奖记录" className="pirate-panel mt-2 p-2">
    <h2 className="mb-2 text-sm font-bold text-[#333]">
      获奖记录
      <span className="ml-2 text-xs font-normal text-[#777]">奖项含金量与本站片源画质相当</span>
    </h2>
    <ul className="text-xs leading-[1.5]">
      {AWARDS.map((award) => (
        <li
          key={award}
          className="border-b border-dashed border-[#ddd] py-1.5 text-[#333] last:border-b-0"
        >
          <span className="mr-1 text-[#f00]">◆</span>
          {award}
        </li>
      ))}
    </ul>
  </section>
);

export default Awards;
