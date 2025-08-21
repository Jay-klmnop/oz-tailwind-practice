export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img
        className="w-[300px] h-48 rounded-[10px] mb-[3px]"
        src={content.img}
        alt={content.title}
      />
      <span className="text-xs text-yellow-500 border border-yellow-500 px-1 py-[5px] rounded-sm">
        모집중
      </span>
      <div className="text-base font-semibold">{content.title}</div>
      <p className="text-xs text-neutral-400">{content.subtitle}</p>
    </div>
  );
}
