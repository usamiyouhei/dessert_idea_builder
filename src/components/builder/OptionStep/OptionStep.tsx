import React from "react";
import type { DessertOption } from "@/data/dessertTypes";
import OptionCard from "../OptionCard/OptionCard";

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
    <section>
      <p>{stepLabel}</p>
      <h2>{title}</h2>
      <p>{description}</p>

      <div>
        {options.map((option) => (
          <OptionCard
            key={option.value}
            label={option.label}
            selected={selectedValues.includes(option.value)}
            onClick={() => onToggle(option.value)}
          />
        ))}
      </div>
    </section>
  );
}
