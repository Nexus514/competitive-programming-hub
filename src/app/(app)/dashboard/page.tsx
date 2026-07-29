import { dashboardStats, ratingHistory, activityData } from "@/data/dashboard";
import { recentSubmissions } from "@/data/submissions";
import StatCard from "@/components/StatCard";
import RatingChart from "@/components/RatingChart";
import ActivityHeatmap from "@/components/ActivityHeatmap";

const statusConfig: Record<string, { text: string; bg: string }> = {
  Accepted: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  "Wrong Answer": {
    text: "text-red-400",
    bg: "bg-red-500/10",
  },
  "Time Limit Exceeded": {
    text: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  "Runtime Error": {
    text: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  "Compilation Error": {
    text: "text-zinc-400",
    bg: "bg-zinc-500/10",
  },
};

export default function DashboardPage() {
  const stats = dashboardStats;

  return (
    <div className="p-8 space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-xl font-bold tracking-tight text-zinc-100">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Your competitive programming progress at a glance
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Problems Solved"
          value={stats.problemsSolved}
          sub={`/ ${stats.totalProblems} total`}
          icon={
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
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          }
        />
        <StatCard
          label="Current Rating"
          value={stats.currentRating}
          sub={`Max: ${stats.maxRating}`}
          icon={
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
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          }
        />
        <StatCard
          label="Current Streak"
          value={`${stats.currentStreak} days`}
          sub={`Best: ${stats.longestStreak} days`}
          icon={
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
              <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          }
        />
        <StatCard
          label="Acceptance Rate"
          value={`${stats.acceptanceRate}%`}
          sub={`${stats.totalSubmissions} submissions`}
          icon={
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
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          }
        />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Rating chart - takes 2 columns */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6 lg:col-span-2">
          <h2 className="text-sm font-semibold text-zinc-300 mb-1">
            Rating History
          </h2>
          <p className="text-xs text-zinc-600 mb-4">
            Contest rating over the last 6 months
          </p>
          <RatingChart data={ratingHistory} />
        </div>

        {/* Stats breakdown */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6">
          <h2 className="text-sm font-semibold text-zinc-300 mb-4">
            Problem Stats
          </h2>
          <div className="space-y-4">
            {[
              { label: "Easy", solved: 42, total: 45, color: "bg-emerald-500" },
              { label: "Medium", solved: 35, total: 50, color: "bg-amber-500" },
              { label: "Hard", solved: 10, total: 25, color: "bg-red-500" },
            ].map((diff) => (
              <div key={diff.label}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-zinc-400">{diff.label}</span>
                  <span className="text-zinc-600">
                    {diff.solved}/{diff.total}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${diff.color}`}
                    style={{
                      width: `${(diff.solved / diff.total) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-800">
            <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
              Languages Used
            </h3>
            <div className="space-y-2.5">
              {[
                { lang: "C++", pct: 45 },
                { lang: "Python", pct: 30 },
                { lang: "Java", pct: 20 },
                { lang: "Other", pct: 5 },
              ].map((l) => (
                <div key={l.lang} className="flex items-center gap-3">
                  <span className="text-xs text-zinc-400 w-16">{l.lang}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-emerald-500/60"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-zinc-600 w-10 text-right">
                    {l.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Activity heatmap */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6">
        <h2 className="text-sm font-semibold text-zinc-300 mb-1">
          Problem-Solving Activity
        </h2>
        <p className="text-xs text-zinc-600 mb-5">
          Submissions over the last year
        </p>
        <ActivityHeatmap data={activityData} />
      </div>

      {/* Recent submissions */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6">
        <h2 className="text-sm font-semibold text-zinc-300 mb-1">
          Recent Submissions
        </h2>
        <p className="text-xs text-zinc-600 mb-4">
          Your latest problem attempts
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800 text-left">
                <th className="pb-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Problem
                </th>
                <th className="pb-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="pb-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Language
                </th>
                <th className="pb-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Runtime
                </th>
                <th className="pb-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Memory
                </th>
                <th className="pb-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  When
                </th>
              </tr>
            </thead>
            <tbody>
              {recentSubmissions.map((sub) => {
                const config = statusConfig[sub.status] ?? statusConfig["Compilation Error"];
                const when = new Date(sub.timestamp);
                const whenStr = when.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                });
                return (
                  <tr
                    key={sub.id}
                    className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors"
                  >
                    <td className="py-3 pr-4">
                      <a
                        href={`/problems/${sub.problemId}`}
                        className="text-zinc-300 hover:text-emerald-400 transition-colors font-medium"
                      >
                        {sub.problemTitle}
                      </a>
                    </td>
                    <td className="py-3 pr-4">
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${config.bg} ${config.text}`}
                      >
                        {sub.status}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-zinc-500">{sub.language}</td>
                    <td className="py-3 pr-4 text-zinc-500">{sub.runtime}</td>
                    <td className="py-3 pr-4 text-zinc-500">{sub.memory}</td>
                    <td className="py-3 text-zinc-600 whitespace-nowrap">
                      {whenStr}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
