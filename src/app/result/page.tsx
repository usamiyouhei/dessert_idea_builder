"use client";
import React, { useEffect, useState } from "react";
import styles from "./result.module.scss";
import { DessertIdea } from "@/types/dessert";

export default function ResultPage() {
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

  if (!idea) {
    return (
      <main>
        <p>結果がありません。</p>
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
