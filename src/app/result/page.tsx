"use client";
import React, { useEffect, useState } from "react";
import styles from "./result.module.scss";
import { DessertIdea } from "@/types/dessert";
import { useRouter } from "next/navigation";

const SAVED_IDEAS_KEY = "dessert-ideas";
const CURRENT_IDEA_KEY = "currentIdea";

export default function ResultPage() {
  const router = useRouter();

  const [idea] = useState<DessertIdea | null>(() => {
    const data = localStorage.getItem("currentIdea");

    if (!data) {
      return null;
    }

    try {
      return JSON.parse(data) as DessertIdea;
    } catch {
      return null;
    }
  });

  const [title, setTitle] = useState(() => idea?.title ?? "");
  const [saveMessage, setSaveMessage] = useState("");

  const handleSave = () => {
    if (!idea) {
      return;
    }

    if (!title.trim()) {
      setSaveMessage("アイデアタイトルを入力してください。");
      return;
    }

    const savedIdea: DessertIdea = {
      ...idea,
      title: title.trim(),
      createdAt: idea.createdAt || new Date().toISOString(),
    };
  };

  if (!idea) {
    return (
      <main className={styles.page}>
        <div className={styles.empty}>
          <h1 className={styles.emptyTitle}>結果がありません。</h1>

          <p className={styles.emptyText}>
            デザートアイデアを作成してから結果を表示してください。
          </p>

          <button
            className={styles.primaryButton}
            type="button"
            onClick={() => router.push("/idea-builder")}
          ></button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <h1>デザートアイデア結果</h1>
      {idea.title || "タイトル未設定"}

      <p>タイプ：{idea.dessertTypes.join("、")}</p>
      <p>フレーバー：{idea.flavors.join("、")}</p>
      <p>形：{idea.shapes.join("、")}</p>
      <p>食感：{idea.textures.join("、")}</p>
      <p>温度：{idea.temperatures.join("、")}</p>
      <p>飾り：{idea.decorations.join("、")}</p>
    </main>
  );
}
