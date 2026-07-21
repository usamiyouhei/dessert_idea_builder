import React from "react";
import styles from "./Sidebar.module.scss";
type SidebarProps = {
  onNewidea: () => void;
};

export default function Sidebar({ onNewidea }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <span>Dessert</span>
        <strong>Idea</strong>
      </div>

      <nav className={styles.navigation}>
        <button
          type="button"
          className={styles.newIdeaButton}
          onClick={onNewidea}
        >
          ＋ 新しいアイデア
        </button>

        <button type="button" className={styles.navItem}>
          保存済みアイデア
        </button>
      </nav>
    </aside>
  );
}
