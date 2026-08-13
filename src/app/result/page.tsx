"use client";
import React, { useEffect, useState } from "react";
import styles from "./result.module.scss";
import { DessertIdea } from "@/types/dessert";
import { useRouter } from "next/navigation";
import ResultItem from "@/components/result/ResultItem";
import { dessertTypes } from "@/data/dessertTypes";
import { flavors } from "@/data/flavors";
import { shapes } from "@/data/shapes";
import { textures } from "@/data/textures";
import { temperatures } from "@/data/temperatures";
import { decorations } from "@/data/decorations";
import { CURRENT_IDEA_KEY, SAVED_IDEAS_KEY } from "@/constants/storage";

type Option = {
  value: string;
  label: string;
};

const getLabels = (values: string[], options: Option[]) => {
  return values.map((value) => {
    const option = options.find((item) => item.value === value);

    return option?.label ?? value;
  });
};

export default function ResultPage() {
  const [isSaved, setIsSaved] = useState(false);
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

    // setSaveMessage("アイデアを保存しました。");
    setIsSaved(true);
  };

  const handleDoNotSave = () => {
    localStorage.removeItem(CURRENT_IDEA_KEY);
    router.push("/idea-builder");
  };

  if (!idea) {
    return (
      <main className={styles.page}>
        <p>結果がありません。</p>
      </main>
    );
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

        <div className={styles.ideaGrid}>
          <ResultItem
            label="タイプ"
            values={getLabels(idea.dessertTypes, dessertTypes)}
          />
          <ResultItem
            label="フレーバー"
            values={getLabels(idea.flavors, flavors)}
          />
          <ResultItem label="形" values={getLabels(idea.shapes, shapes)} />
          <ResultItem
            label="食感"
            values={getLabels(idea.textures, textures)}
          />
          <ResultItem
            label="温度"
            values={getLabels(idea.temperatures, temperatures)}
          />
          <ResultItem
            label="飾り"
            values={getLabels(idea.decorations, decorations)}
          />
        </div>

        {saveMessage && <p className={styles.saveMessage}>{saveMessage}</p>}

        {isSaved ? (
          <div className={styles.savedArea}>
            <p className={styles.saveMessage}>アイデアを保存しました。</p>

            <button
              className={styles.primaryButton}
              type="button"
              onClick={() => router.push("/idea-builder")}
            >
              最初の画面に戻る
            </button>
          </div>
        ) : (
          <div className={styles.actions}>
            <button
              className={styles.secondaryButton}
              type="button"
              onClick={handleDoNotSave}
            >
              保存しない
            </button>
            <button
              className={styles.primaryButton}
              type="button"
              onClick={handleSave}
            >
              保存する
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
