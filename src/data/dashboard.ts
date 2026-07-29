import { DashboardStats, RatingPoint, ActivityDay } from "@/lib/types";

export const dashboardStats: DashboardStats = {
  problemsSolved: 87,
  totalProblems: 120,
  currentRating: 1847,
  maxRating: 1923,
  currentStreak: 12,
  longestStreak: 34,
  totalSubmissions: 342,
  acceptanceRate: 58.2,
};

export const ratingHistory: RatingPoint[] = [
  { date: "Jan", rating: 1500, contest: "Initial" },
  { date: "Jan", rating: 1523, contest: "Weekly #1" },
  { date: "Jan", rating: 1498, contest: "Biweekly #1" },
  { date: "Feb", rating: 1541, contest: "Weekly #2" },
  { date: "Feb", rating: 1562, contest: "Biweekly #2" },
  { date: "Feb", rating: 1589, contest: "Weekly #3" },
  { date: "Mar", rating: 1604, contest: "Weekly #4" },
  { date: "Mar", rating: 1621, contest: "Biweekly #3" },
  { date: "Mar", rating: 1587, contest: "Weekly #5" },
  { date: "Mar", rating: 1634, contest: "Biweekly #4" },
  { date: "Apr", rating: 1650, contest: "Weekly #6" },
  { date: "Apr", rating: 1672, contest: "Biweekly #5" },
  { date: "Apr", rating: 1701, contest: "Weekly #7" },
  { date: "Apr", rating: 1695, contest: "Biweekly #6" },
  { date: "May", rating: 1720, contest: "Weekly #8" },
  { date: "May", rating: 1745, contest: "Biweekly #7" },
  { date: "May", rating: 1712, contest: "Weekly #9" },
  { date: "Jun", rating: 1758, contest: "Weekly #10" },
  { date: "Jun", rating: 1780, contest: "Biweekly #8" },
  { date: "Jun", rating: 1764, contest: "Weekly #11" },
  { date: "Jun", rating: 1792, contest: "Biweekly #9" },
  { date: "Jul", rating: 1820, contest: "Weekly #12" },
  { date: "Jul", rating: 1805, contest: "Biweekly #10" },
  { date: "Jul", rating: 1847, contest: "Weekly #13" },
];

function generateActivity(): ActivityDay[] {
  const days: ActivityDay[] = [];
  const now = new Date("2026-07-29");

  for (let i = 364; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];

    // More active on recent days, weekends have fewer submissions
    const dayOfWeek = d.getDay();
    const baseRate = i < 60 ? 0.6 : i < 180 ? 0.3 : 0.15;
    const weekendMultiplier = dayOfWeek === 0 || dayOfWeek === 6 ? 0.3 : 1;
    const rate = baseRate * weekendMultiplier;

    const count = Math.random() < rate ? Math.floor(Math.random() * 8) + 1 : 0;
    days.push({ date: dateStr, count });
  }
  return days;
}

export const activityData: ActivityDay[] = generateActivity();
