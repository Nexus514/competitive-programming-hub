import { problems } from "@/data/problems";
import { notFound } from "next/navigation";
import Link from "next/link";
import DifficultyBadge from "@/components/DifficultyBadge";
import TagBadge from "@/components/TagBadge";
import CodeEditorPlaceholder from "@/components/CodeEditorPlaceholder";

export function generateStaticParams() {
  return problems.map((p) => ({ id: p.id }));
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const problem = problems.find((p) => p.id === id);

  if (!problem) {
    notFound();
  }

  return (
    <div className="p-8 space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-zinc-500">
        <Link
          href="/problems"
          className="hover:text-zinc-300 transition-colors"
        >
          Problems
        </Link>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <span className="text-zinc-400">{problem.title}</span>
      </nav>

      {/* Problem header */}
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-xl font-bold tracking-tight text-zinc-100">
            {problem.title}
          </h1>
          <DifficultyBadge difficulty={problem.difficulty} />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {problem.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-zinc-600">
          <span>Time Limit: {problem.timeLimit}</span>
          <span>Memory Limit: {problem.memoryLimit}</span>
        </div>
      </div>

      {/* Problem content + editor split */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left: Problem description */}
        <div className="space-y-6">
          {/* Description */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6">
            <h2 className="text-sm font-semibold text-zinc-300 mb-3">
              Description
            </h2>
            <div className="text-sm leading-relaxed text-zinc-400 whitespace-pre-line">
              {problem.description}
            </div>
          </div>

          {/* Constraints */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6">
            <h2 className="text-sm font-semibold text-zinc-300 mb-3">
              Constraints
            </h2>
            <ul className="space-y-1.5">
              {problem.constraints.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="text-emerald-500 mt-0.5 shrink-0">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Sample I/O */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6">
            <h2 className="text-sm font-semibold text-zinc-300 mb-3">
              Sample
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                  Input
                </p>
                <pre className="rounded-lg bg-zinc-950 border border-zinc-800 p-4 text-sm font-mono text-zinc-400 overflow-x-auto">
                  {problem.sampleInput}
                </pre>
              </div>
              <div>
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                  Output
                </p>
                <pre className="rounded-lg bg-zinc-950 border border-zinc-800 p-4 text-sm font-mono text-zinc-400 overflow-x-auto">
                  {problem.sampleOutput}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Code editor placeholder */}
        <div className="lg:sticky lg:top-8 self-start space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-300">Solution</h2>
            <select
              className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400 focus:outline-none focus:border-emerald-500/50"
              defaultValue="cpp"
            >
              <option value="cpp">C++</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
          </div>
          <CodeEditorPlaceholder />
        </div>
      </div>
    </div>
  );
}
