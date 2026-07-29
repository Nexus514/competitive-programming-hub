export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Gradient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20">
            <span className="text-lg font-bold text-emerald-400">&lt;/&gt;</span>
          </div>
          <span className="text-base font-semibold tracking-tight text-zinc-100">
            CP Hub
          </span>
        </div>
        <nav className="flex items-center gap-6">
          <a
            href="/dashboard"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-200"
          >
            Dashboard
          </a>
          <a
            href="/problems"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-200"
          >
            Problems
          </a>
          <a
            href="/notes"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-200"
          >
            Notes
          </a>
          <a
            href="/dashboard"
            className="inline-flex items-center rounded-lg bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 transition-colors hover:bg-emerald-500/20"
          >
            Open App
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-4xl px-8 pt-24 pb-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-sm text-zinc-400 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Now in active development — MVP v0.1
        </div>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl">
          Master the art of
          <br />
          <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            competitive programming
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Track your progress, solve curated problems, and build the algorithmic
          intuition you need to excel at coding contests. All in one
          lightning-fast platform.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            Go to Dashboard
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a
            href="/problems"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-800"
          >
            Browse Problems
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { value: "120+", label: "Curated Problems" },
            { value: "12", label: "Algorithm Topics" },
            { value: "87", label: "Problems Solved" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-6"
            >
              <p className="text-3xl font-bold text-zinc-100">{stat.value}</p>
              <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="mt-24 text-left">
          <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-100">
            Everything you need to improve
          </h2>
          <p className="mt-2 text-center text-zinc-500">
            Built for competitive programmers, by competitive programmers
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Problem Library",
                desc: "Browse problems organized by difficulty, topic, and pattern. Filter and search to find exactly what you need to practice.",
                icon: (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                ),
              },
              {
                title: "Progress Dashboard",
                desc: "Track your rating, streaks, and problem-solving activity over time. See where you are improving and what to work on next.",
                icon: (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="9" rx="1" />
                    <rect x="14" y="3" width="7" height="5" rx="1" />
                    <rect x="14" y="12" width="7" height="9" rx="1" />
                    <rect x="3" y="16" width="7" height="5" rx="1" />
                  </svg>
                ),
              },
              {
                title: "Algorithm Notes",
                desc: "Reference guides on essential algorithms and data structures. Study patterns, not just solutions.",
                icon: (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                ),
              },
              {
                title: "Code Editor",
                desc: "Write, run, and submit solutions directly in the browser. Support for multiple languages with fast execution.",
                icon: (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-zinc-200">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800/50 py-8 text-center">
        <p className="text-sm text-zinc-600">
          Competitive Programming Hub — Built for competitive programmers
        </p>
      </footer>
    </div>
  );
}
