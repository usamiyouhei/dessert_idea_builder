"use client";

import React from "react";
import styles from "./Sidebar.module.scss";
import { useRouter } from "next/navigation";
import { Bookmark, Plus, Sparkles } from "lucide-react";
type SidebarProps = {
  onNewidea: () => void;
};

export default function Sidebar({ onNewidea }: SidebarProps) {
  const router = useRouter();
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoArea}>
        <div className={styles.logoIcon}>
          <Sparkles size={20} strokeWidth={1.8} />
        </div>

        <div>
          <p className={styles.logoTitle}>Dessert Idea</p>
          <p className={styles.logoSubtitle}>Creative Builder</p>
        </div>
      </div>

      <nav className={styles.navigation}>
        <p className={styles.navigationLabel}>MENU</p>

        <button
          type="button"
          className={`${styles.navigationItem} ${styles.active}`}
          onClick={() => router.push("/idea-builder")}
        >
          <Plus size={19} strokeWidth={1.8} />
          <span>新しいアイデア</span>
        </button>

        <button
          type="button"
          className={styles.navigationItem}
          onClick={() => router.push}
        >
          <Bookmark size={19} strokeWidth={1.8} />
          <span>保存済みアイデア</span>
        </button>
      </nav>

      <div className={styles.sidebarFooter}>
        <p>Build your dessert concept.</p>
      </div>
    </aside>
  );
}
