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

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setSaveMessage("アイデアタイトルを入力してください。");
      return;
    }

    const savedIdea: DessertIdea = {
      ...idea,
      title: trimmedTitle,
      createdAt: idea.createdAt || new Date().toISOString(),
    };

    let savedIdeas: DessertIdea[] = [];
    try {
      const storedIdeas = localStorage.getItem(SAVED_IDEAS_KEY);
      savedIdeas = storedIdeas
        ? (JSON.parse(storedIdeas) as DessertIdea[])
        : [];
    } catch (error) {
      savedIdeas = [];
    }
    const alreadySaved = savedIdeas.some(
      (savedItem) => savedItem.id === savedIdea.id,
    );
    const updateIdeas = alreadySaved
      ? savedIdeas.map((savedItem) =>
          savedItem.id === savedIdea.id ? savedIdea : savedItem,
        )
      : [...savedIdeas, savedIdea];

    localStorage.setItem(SAVED_IDEAS_KEY, JSON.stringify(updateIdeas));
    localStorage.setItem(CURRENT_IDEA_KEY, JSON.stringify(savedIdea));

    setSaveMessage("アイデアを保存しました。");
  };

  const handleDoNotSave = () => {
    localStorage.removeItem(CURRENT_IDEA_KEY);
    router.push("/idea-builder");
  };

  if (!idea) {
  }
  return (
    <main className={styles.page}>
      <section className={styles.resultCard}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>DESSERT IDEA</p>
          <h1 className={styles.heading}>デザートアイデア結果</h1>
          <p className={styles.description}>
            タイトルを付けて、作成したアイデアを保存できます。
          </p>
        </header>

        <div className={styles.titleField}>
          <label className={styles.inputLabel} htmlFor="idea-title">
            アイデアタイトル
          </label>

          <input
            className={styles.titleInput}
            id="idea-title"
            value={title}
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
              setSaveMessage("");
            }}
            placeholder="例：桃とアールグレイの冷製タルト"
          />
        </div>

        <div className={styles.ideaGrid}></div>

        {saveMessage && <p className={styles.saveMessage}>{saveMessage}</p>}

        <div className={styles.actions}>
          <button
            className={styles.secondaryButton}
            type="button"
            onClick={handleDoNotSave}
          >
            保存しない
          </button>
        </div>

        <button
          className={styles.primaryButton}
          type="button"
          onClick={handleSave}
        >
          保存する
        </button>
      </section>
    </main>
  );
}
