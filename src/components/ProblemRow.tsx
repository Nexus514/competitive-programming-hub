import Link from "next/link";
import DifficultyBadge from "./DifficultyBadge";
import TagBadge from "./TagBadge";
import { Problem } from "@/lib/types";

export default function ProblemRow({ problem }: { problem: Problem }) {
  return (
    <Link
      href={`/problems/${problem.id}`}
      className="group flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/60 px-5 py-4 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
    >
      <div className="flex items-center gap-4 min-w-0">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <p className="truncate text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">
              {problem.title}
            </p>
            <DifficultyBadge difficulty={problem.difficulty} />
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {problem.tags.slice(0, 4).map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
            {problem.tags.length > 4 && (
              <span className="text-xs text-zinc-600">+{problem.tags.length - 4}</span>
            )}
          </div>
        </div>
      </div>
      <div className="ml-4 flex items-center gap-3 text-xs text-zinc-600 shrink-0">
        <span>{problem.timeLimit}</span>
        <span>{problem.memoryLimit}</span>
        <svg
          className="text-zinc-700 group-hover:text-emerald-500 transition-colors"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </Link>
  );
}
