import React, { ReactNode } from "react";
import type { DessertOption } from "@/data/dessertTypes";
import OptionCard from "../OptionCard/OptionCard";
import styles from "./OptionStep.module.scss";

type OptionStepProps = {
  stepLabel: string;
  title: string;
  description: string;
  options: DessertOption[];
  selectedValues: string[];
  onToggle: (value: string) => void;
};

export default function OptionStep({
  stepLabel,
  title,
  description,
  options,
  selectedValues,
  onToggle,
}: OptionStepProps) {
  return (
    <section className={styles.optionStep}>
      <div className={styles.heading}>
        <p className={styles.stepLabel}>{stepLabel}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.options}>
        {options.map((option) => (
          <OptionCard
            key={option.value}
            label={option.label}
            isSelected={selectedValues.includes(option.value)}
            onClick={() => onToggle(option.value)}
          />
        ))}
      </div>
    </section>
  );
}
