"use client";
import React from "react";
import styles from "./SavedIdeaCard.module.scss";
import { DessertIdea } from "@/types/dessert";

type SavedIdeaCardProps = {
  idea: DessertIdea;
};

export default function SavedIdeaCard({ idea }: SavedIdeaCardProps) {
  return <article className={styles.card}></article>;
}
