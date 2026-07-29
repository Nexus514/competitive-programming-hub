export default function TagBadge({
  tag,
  active = false,
  onClick,
}: {
  tag: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
        active
          ? "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/30"
          : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
      } ${onClick ? "cursor-pointer" : "cursor-default"}`}
    >
      {tag}
    </button>
  );
}
