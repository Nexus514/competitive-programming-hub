"use client";

import { useState, useMemo } from "react";
import { problems, allTags } from "@/data/problems";
import { Difficulty } from "@/lib/types";
import SearchBar from "@/components/SearchBar";
import DifficultyBadge from "@/components/DifficultyBadge";
import TagBadge from "@/components/TagBadge";
import ProblemRow from "@/components/ProblemRow";

const DIFFICULTIES: ("All" | Difficulty)[] = ["All", "Easy", "Medium", "Hard"];

export default function ProblemsPage() {
  const [search, setSearch] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<"All" | Difficulty>("All");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };

  const filtered = useMemo(() => {
    return problems.filter((p) => {
      if (selectedDifficulty !== "All" && p.difficulty !== selectedDifficulty)
        return false;
      if (selectedTags.size > 0 && !p.tags.some((t) => selectedTags.has(t)))
        return false;
      if (search) {
        const q = search.toLowerCase();
        if (
          !p.title.toLowerCase().includes(q) &&
          !p.tags.some((t) => t.toLowerCase().includes(q))
        )
          return false;
      }
      return true;
    });
  }, [search, selectedDifficulty, selectedTags]);

  return (
    <div className="p-8 space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-xl font-bold tracking-tight text-zinc-100">
          Problems
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Browse our curated problem library
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        {/* Search + difficulty */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1 max-w-md">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search problems by title or tag..."
            />
          </div>
          <div className="flex gap-2">
            {DIFFICULTIES.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDifficulty(d)}
                className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors ${
                  selectedDifficulty === d
                    ? "bg-zinc-700 text-zinc-100"
                    : "bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 border border-zinc-800"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Tags filter */}
        <div className="flex flex-wrap gap-1.5">
          {allTags.map((tag) => (
            <TagBadge
              key={tag}
              tag={tag}
              active={selectedTags.has(tag)}
              onClick={() => toggleTag(tag)}
            />
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-zinc-600">
          Showing{" "}
          <span className="text-zinc-400 font-medium">{filtered.length}</span>{" "}
          of{" "}
          <span className="text-zinc-400 font-medium">{problems.length}</span>{" "}
          problems
        </p>
      </div>

      {/* Problem list */}
      <div className="space-y-2">
        {filtered.map((problem) => (
          <ProblemRow key={problem.id} problem={problem} />
        ))}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <svg
              className="h-12 w-12 text-zinc-700 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <p className="text-sm text-zinc-500">No problems match your filters</p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedDifficulty("All");
                setSelectedTags(new Set());
              }}
              className="mt-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
