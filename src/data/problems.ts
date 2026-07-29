import { Problem } from "@/lib/types";

export const problems: Problem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Array", "Hash Table"],
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    sampleInput: `nums = [2, 7, 11, 15], target = 9`,
    sampleOutput: `[0, 1]`,
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists.",
    ],
    timeLimit: "1s",
    memoryLimit: "256 MB",
  },
  {
    id: "longest-substring",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    tags: ["String", "Sliding Window", "Hash Table"],
    description: `Given a string s, find the length of the longest substring without repeating characters.

A substring is a contiguous non-empty sequence of characters within a string.`,
    sampleInput: `s = "abcabcbb"`,
    sampleOutput: `3`,
    constraints: [
      "0 ≤ s.length ≤ 5 × 10⁴",
      "s consists of English letters, digits, symbols and spaces.",
    ],
    timeLimit: "1s",
    memoryLimit: "256 MB",
  },
  {
    id: "median-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).`,
    sampleInput: `nums1 = [1, 3], nums2 = [2]`,
    sampleOutput: `2.00000`,
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 ≤ m ≤ 1000",
      "0 ≤ n ≤ 1000",
      "1 ≤ m + n ≤ 2000",
      "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶",
    ],
    timeLimit: "2s",
    memoryLimit: "256 MB",
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    tags: ["String", "Stack"],
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    sampleInput: `s = "()[]{}"`,
    sampleOutput: `true`,
    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "s consists of parentheses only '()[]{}'.",
    ],
    timeLimit: "1s",
    memoryLimit: "256 MB",
  },
  {
    id: "merge-k-sorted",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    tags: ["Linked List", "Heap", "Divide and Conquer"],
    description: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.`,
    sampleInput: `lists = [[1,4,5],[1,3,4],[2,6]]`,
    sampleOutput: `[1,1,2,3,4,4,5,6]`,
    constraints: [
      "k == lists.length",
      "0 ≤ k ≤ 10⁴",
      "0 ≤ lists[i].length ≤ 500",
      "-10⁴ ≤ lists[i][j] ≤ 10⁴",
      "The sum of lists[i].length will not exceed 10⁴.",
    ],
    timeLimit: "3s",
    memoryLimit: "512 MB",
  },
  {
    id: "container-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    tags: ["Array", "Two Pointers", "Greedy"],
    description: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the i-th line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.`,
    sampleInput: `height = [1,8,6,2,5,4,8,3,7]`,
    sampleOutput: `49`,
    constraints: [
      "n == height.length",
      "2 ≤ n ≤ 10⁵",
      "0 ≤ height[i] ≤ 10⁴",
    ],
    timeLimit: "1s",
    memoryLimit: "256 MB",
  },
  {
    id: "trap-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    tags: ["Array", "Two Pointers", "Dynamic Programming", "Stack"],
    description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
    sampleInput: `height = [0,1,0,2,1,0,1,3,2,1,2,1]`,
    sampleOutput: `6`,
    constraints: [
      "n == height.length",
      "1 ≤ n ≤ 2 × 10⁴",
      "0 ≤ height[i] ≤ 10⁵",
    ],
    timeLimit: "1s",
    memoryLimit: "256 MB",
  },
  {
    id: "binary-tree-max-path",
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    tags: ["Tree", "DFS", "Dynamic Programming"],
    description: `A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once.

Given the root of a binary tree, return the maximum path sum of any non-empty path.`,
    sampleInput: `root = [-10,9,20,null,null,15,7]`,
    sampleOutput: `42`,
    constraints: [
      "The number of nodes in the tree is in the range [1, 3 × 10⁴].",
      "-1000 ≤ Node.val ≤ 1000",
    ],
    timeLimit: "2s",
    memoryLimit: "256 MB",
  },
  {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    tags: ["Grid", "BFS", "DFS", "Union Find"],
    description: `Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.`,
    sampleInput: `grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]`,
    sampleOutput: `3`,
    constraints: [
      "m == grid.length",
      "n == grid[i].length",
      "1 ≤ m, n ≤ 300",
      "grid[i][j] is '0' or '1'.",
    ],
    timeLimit: "1s",
    memoryLimit: "256 MB",
  },
  {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    tags: ["Array", "Binary Search", "Dynamic Programming"],
    description: `Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.`,
    sampleInput: `nums = [10,9,2,5,3,7,101,18]`,
    sampleOutput: `4`,
    constraints: [
      "1 ≤ nums.length ≤ 2500",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
    ],
    timeLimit: "1s",
    memoryLimit: "256 MB",
  },
  {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    tags: ["Graph", "BFS", "DFS", "Topological Sort"],
    description: `There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [aᵢ, bᵢ] indicates that you must take course bᵢ first if you want to take course aᵢ.

Return true if you can finish all courses. Otherwise, return false.`,
    sampleInput: `numCourses = 2, prerequisites = [[1,0]]`,
    sampleOutput: `true`,
    constraints: [
      "1 ≤ numCourses ≤ 2000",
      "0 ≤ prerequisites.length ≤ 5000",
      "prerequisites[i].length == 2",
      "0 ≤ aᵢ, bᵢ < numCourses",
      "All the pairs prerequisites[i] are unique.",
    ],
    timeLimit: "1s",
    memoryLimit: "256 MB",
  },
  {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    tags: ["String", "BFS", "Hash Table"],
    description: `A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s₁ -> s₂ -> ... -> sₖ such that every adjacent pair of words differs by a single letter.

Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.`,
    sampleInput: `beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]`,
    sampleOutput: `5`,
    constraints: [
      "1 ≤ beginWord.length ≤ 10",
      "endWord.length == beginWord.length",
      "1 ≤ wordList.length ≤ 5000",
      "wordList[i].length == beginWord.length",
      "beginWord, endWord, and wordList[i] consist of lowercase English letters.",
      "beginWord != endWord",
      "All the words in wordList are unique.",
    ],
    timeLimit: "2s",
    memoryLimit: "256 MB",
  },
];

export const allTags = Array.from(
  new Set(problems.flatMap((p) => p.tags))
).sort();
