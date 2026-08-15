"use client";
import React from "react";
import styles from "./SavedIdeaCard.module.scss";
import { DessertIdea } from "@/types/dessert";
import { useRouter } from "next/router";
import { Bookmark } from "lucide-react";

type SavedIdeaCardProps = {
  idea: DessertIdea;
};

export default function SavedIdeaCard({ idea }: SavedIdeaCardProps) {
  const router = useRouter();

  const handleOpen = () => {
    router.push(`/saved/${idea.id}`);
  };
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <div>
          <p className={styles.category}>DESSERT IDEA</p>

          <h2 className={styles.title}>{idea.title}</h2>
        </div>

        <button
          type="button"
          className={styles.favoriteButton}
          aria-label="お気に入り"
        >
          <Bookmark size={21} fill={idea.favorite ? "currentColor" : "none"} />
        </button>
      </div>

      <p className={styles.concept}>{idea.concept}</p>

      <div className={styles.tags}></div>
    </article>
  );
}
