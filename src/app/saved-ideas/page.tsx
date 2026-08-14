"use client";

import { SAVED_IDEAS_KEY } from "@/constants/storage";
import { DessertIdea } from "@/types/dessert";
import React, { useEffect, useState } from "react";
import styles from "./saved-ideas.module.scss";

export default function SavedIdeasPage() {
  const [ideas, setIdeas] = useState<DessertIdea[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem(SAVED_IDEAS_KEY);

    if (!saved) return;

    return JSON.parse(saved);
  });

  return (
    <main className={styles.saved}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>SAVED IDEAS</p>
        <h1 className={styles.title}>保存済みアイデア</h1>

        <p className={styles.description}>
          作成したデザートアイデアを保存できます。
        </p>

        {ideas.length === 0 ? (
          <div className={styles.empty}>
            <p>保存されたアイデアはありません。</p>
          </div>
        ) : (
          ideas.map((idea) => (
            <div key={idea.id}>
              <h2>{idea.title}</h2>
              <p>{idea.concept}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
