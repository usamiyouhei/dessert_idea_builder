import React from "react";
import styles from "./Header.module.scss";

type HeaderProps = {
  title: string;
  description?: string;
  currentStep?: string;
  totalSteps?: string;
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

      {currentStep !== undefined && totalSteps !== undefined && (
        <span>
          Step {currentStep + 1} / {totalSteps}
        </span>
      )}
    </header>
  );
}
