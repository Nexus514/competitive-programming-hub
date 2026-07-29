import { Difficulty } from "@/lib/types";

const difficultyConfig: Record<Difficulty, { bg: string; text: string; label: string }> = {
  Easy: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    label: "Easy",
  },
  Medium: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    label: "Medium",
  },
  Hard: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    label: "Hard",
  },
};

export default function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const config = difficultyConfig[difficulty];
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${config.bg} ${config.text}`}
    >
      {config.label}
    </span>
  );
}
