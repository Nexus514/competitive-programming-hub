export default function CodeEditorPlaceholder() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
      {/* Fake editor header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-amber-500/60" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/60" />
          </div>
          <span className="ml-2 text-xs text-zinc-600">solution.cpp</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-600">C++</span>
        </div>
      </div>

      {/* Fake code lines */}
      <div className="p-4 font-mono text-sm leading-6">
        <div className="flex">
          <span className="w-8 shrink-0 select-none text-right text-zinc-700 pr-4">
            1
          </span>
          <span className="text-zinc-500">
            <span className="text-purple-400">class</span>{" "}
            <span className="text-emerald-400">Solution</span>{" "}
            <span className="text-zinc-600">{"{"}</span>
          </span>
        </div>
        <div className="flex">
          <span className="w-8 shrink-0 select-none text-right text-zinc-700 pr-4">
            2
          </span>
          <span className="text-zinc-500 pl-4">
            <span className="text-purple-400">public</span>
            <span className="text-zinc-600">:</span>
          </span>
        </div>
        <div className="flex">
          <span className="w-8 shrink-0 select-none text-right text-zinc-700 pr-4">
            3
          </span>
          <span className="text-zinc-500 pl-8">
            <span className="text-amber-400">vector</span>
            <span className="text-zinc-600">&lt;</span>
            <span className="text-purple-400">int</span>
            <span className="text-zinc-600">&gt;</span>{" "}
            <span className="text-blue-400">twoSum</span>
            <span className="text-zinc-600">
              (vector&lt;int&gt;&amp; nums, int target)
            </span>{" "}
            <span className="text-zinc-600">{"{"}</span>
          </span>
        </div>
        <div className="flex">
          <span className="w-8 shrink-0 select-none text-right text-zinc-700 pr-4">
            4
          </span>
          <span className="text-zinc-500 pl-8">
            <span className="text-zinc-600">// Write your solution here</span>
          </span>
        </div>
        <div className="flex">
          <span className="w-8 shrink-0 select-none text-right text-zinc-700 pr-4">
            5
          </span>
          <span className="text-zinc-500 pl-8">
            <span className="text-zinc-600">{"}"}</span>
          </span>
        </div>
        <div className="flex">
          <span className="w-8 shrink-0 select-none text-right text-zinc-700 pr-4">
            6
          </span>
          <span className="text-zinc-600">{"}"};</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between border-t border-zinc-800 px-4 py-2">
        <span className="text-xs text-zinc-500">
          Code editor coming soon — this is a placeholder
        </span>
        <div className="flex gap-2">
          <span className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
            Run
          </span>
          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
            Submit
          </span>
        </div>
      </div>
    </div>
  );
}
