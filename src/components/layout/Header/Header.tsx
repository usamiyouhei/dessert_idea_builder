import React from "react";
import styles from "./Header.module.scss";

type HeaderProps = {
  title: string;
  description?: string;
  currentStep?: number;
  totalSteps?: number;
};

export default function Header({
  title,
  description,
  currentStep,
  totalSteps,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <div className={styles.stepArea}>
        {currentStep !== undefined && totalSteps !== undefined && (
          <span className={styles.stepLabel}>
            Step {currentStep + 1} / {totalSteps}
          </span>
        )}
      </div>
    </header>
  );
}
