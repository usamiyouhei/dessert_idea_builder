import { DessertIdea } from "@/types/dessert";
import React from "react";
import styles from "./SavedIdeaList.module.scss";
import SavedIdeaCard from "./SavedIdeaCard";

type SavedIdeaListProps = {
  ideas: DessertIdea[];
};

export default function SavedIdeaList({ ideas }: SavedIdeaListProps) {
  return (
    <div className={styles.grid}>
      {ideas.map((idea) => (
        <SavedIdeaCard key={idea.id} idea={idea} />
      ))}
    </div>
  );
}
