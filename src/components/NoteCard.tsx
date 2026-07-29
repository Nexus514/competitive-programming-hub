import Link from "next/link";
import { AlgorithmNote } from "@/lib/types";
import TagBadge from "./TagBadge";

export default function NoteCard({ note }: { note: AlgorithmNote }) {
  return (
    <Link
      href={`/notes`}
      className="group block rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5">
            <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-emerald-400 transition-colors">
              {note.title}
            </h3>
            <span className="shrink-0 rounded-md bg-zinc-800 px-2 py-0.5 text-[10px] font-medium uppercase text-zinc-500">
              {note.category}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-2">
            {note.summary}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-medium text-zinc-600">
              {note.complexity}
            </span>
            <span className="text-zinc-700">·</span>
            <div className="flex flex-wrap gap-1">
              {note.topics.slice(0, 3).map((t) => (
                <TagBadge key={t} tag={t} />
              ))}
              {note.topics.length > 3 && (
                <span className="text-xs text-zinc-600">
                  +{note.topics.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
        <svg
          className="shrink-0 text-zinc-700 group-hover:text-emerald-500 transition-colors mt-1"
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
