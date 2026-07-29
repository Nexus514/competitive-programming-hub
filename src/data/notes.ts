import { AlgorithmNote } from "@/lib/types";

export const algorithmNotes: AlgorithmNote[] = [
  {
    id: "binary-search",
    title: "Binary Search",
    category: "Searching",
    summary:
      "Efficiently find elements in sorted arrays by repeatedly dividing the search interval in half. Master the variants for lower bound, upper bound, and answer space searching.",
    topics: ["Binary Search", "Lower Bound", "Upper Bound", "Parametric Search"],
    complexity: "O(log n)",
  },
  {
    id: "two-pointers",
    title: "Two Pointers Technique",
    category: "Techniques",
    summary:
      "Use two pointers moving through data to solve problems involving pairs, subarrays, or meeting conditions. Essential for array and string problems with linear time complexity.",
    topics: ["Two Pointers", "Sliding Window", "Fast & Slow Pointers", "Three Sum"],
    complexity: "O(n)",
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming Fundamentals",
    category: "Dynamic Programming",
    summary:
      "Break complex problems into overlapping subproblems. Learn memoization, tabulation, state transitions, and how to identify DP patterns in problems.",
    topics: ["Memoization", "Tabulation", "Knapsack", "LCS", "LIS", "State Machines"],
    complexity: "Varies",
  },
  {
    id: "graph-traversal",
    title: "Graph Traversal Algorithms",
    category: "Graphs",
    summary:
      "Master BFS and DFS for exploring graphs. Understand when to use each, how to handle cycles, and how to track visited nodes efficiently.",
    topics: ["BFS", "DFS", "Connected Components", "Cycle Detection", "Grid Traversal"],
    complexity: "O(V + E)",
  },
  {
    id: "dijkstra",
    title: "Dijkstra's Shortest Path",
    category: "Graphs",
    summary:
      "Find shortest paths from a source to all vertices in weighted graphs with non-negative edges using a priority queue for optimal performance.",
    topics: [
      "Shortest Path",
      "Priority Queue",
      "Greedy",
      "Weighted Graphs",
      "State-Space Search",
    ],
    complexity: "O((V + E) log V)",
  },
  {
    id: "union-find",
    title: "Union Find / DSU",
    category: "Data Structures",
    summary:
      "Track disjoint sets with near-constant time operations using path compression and union by rank. Critical for connectivity, MST, and grouping problems.",
    topics: [
      "Disjoint Set Union",
      "Path Compression",
      "Union by Rank",
      "Kruskal's MST",
      "Connected Components",
    ],
    complexity: "O(α(n))",
  },
  {
    id: "segment-tree",
    title: "Segment Trees",
    category: "Data Structures",
    summary:
      "Handle range queries and point updates in logarithmic time. Build from array, query ranges, and update values with a complete binary tree structure.",
    topics: [
      "Range Queries",
      "Point Updates",
      "Lazy Propagation",
      "Fenwick Tree",
      "Range Minimum Query",
    ],
    complexity: "O(log n)",
  },
  {
    id: "backtracking",
    title: "Backtracking & Combinatorial Search",
    category: "Techniques",
    summary:
      "Systematically explore all candidates for problems like permutations, combinations, and constraint satisfaction. Learn pruning techniques to avoid exponential blowup.",
    topics: [
      "Backtracking",
      "Pruning",
      "N-Queens",
      "Sudoku Solver",
      "Subsets & Permutations",
    ],
    complexity: "Exponential",
  },
  {
    id: "bit-manipulation",
    title: "Bit Manipulation Tricks",
    category: "Techniques",
    summary:
      "Leverage bitwise operations for space-efficient state representation, fast subset enumeration, and clever arithmetic shortcuts.",
    topics: [
      "Bitmask DP",
      "XOR Properties",
      "Brian Kernighan's Algorithm",
      "Power of Two",
      "Subset Enumeration",
    ],
    complexity: "O(1) per operation",
  },
  {
    id: "topological-sort",
    title: "Topological Sort",
    category: "Graphs",
    summary:
      "Order vertices in a directed acyclic graph such that for every edge u→v, u comes before v. Essential for dependency resolution and scheduling problems.",
    topics: ["Kahn's Algorithm", "DFS-based", "DAG", "Cycle Detection", "DP on DAG"],
    complexity: "O(V + E)",
  },
  {
    id: "trie",
    title: "Trie (Prefix Tree)",
    category: "Data Structures",
    summary:
      "Efficiently store and search for strings by their prefixes. Ideal for autocomplete, dictionary lookups, and XOR maximization problems.",
    topics: ["Prefix Tree", "String Matching", "Autocomplete", "XOR Trie", "Suffix Tree"],
    complexity: "O(L) per operation",
  },
  {
    id: "sliding-window",
    title: "Sliding Window Patterns",
    category: "Techniques",
    summary:
      "Maintain a window over sequential data to solve substring, subarray, and frequency-based problems in linear time. Master fixed and variable window sizes.",
    topics: [
      "Fixed Window",
      "Variable Window",
      "Frequency Maps",
      "Substring Problems",
      "At Most K",
    ],
    complexity: "O(n)",
  },
];

export const noteCategories = Array.from(
  new Set(algorithmNotes.map((n) => n.category))
).sort();
