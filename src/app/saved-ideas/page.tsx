"use client";
import { SAVED_IDEAS_KEY } from "@/constants/storage";
import { DessertIdea } from "@/types/dessert";
import React, { useEffect, useState } from "react";

export default function SavedIdeasPage() {
  const [ideas, setIdeas] = useState<DessertIdea[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem(SAVED_IDEAS_KEY);

    if (!saved) return;

    return JSON.parse(saved);
  });

  return (
    <div>
      <h1>保存済みアイデア</h1>

      {ideas.length === 0 ? (
        <p>保存されたアイデアはありません。</p>
      ) : (
        ideas.map((idea) => (
          <div key={idea.id}>
            <h2>{idea.title}</h2>
            <p>{idea.concept}</p>
          </div>
        ))
      )}
    </div>
  );
}
