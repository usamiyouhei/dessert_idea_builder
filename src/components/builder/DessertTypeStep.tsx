import React from "react";
import OptionStep from "./OptionStep/OptionStep";
import { dessertTypes } from "@/data/dessertTypes";
type DessertTypeStepProps = {
  selectedValues: string[];
  onToggle: (value: string) => void;
};

export default function DessertTypeStep({
  selectedValues,
  onToggle,
}: DessertTypeStepProps) {
  return (
    <OptionStep
      stepLabel="STEP 1"
      title="デザートのタイプを選択"
      description="複数選択できます"
      options={dessertTypes}
      selectedValues={selectedValues}
      onToggle={onToggle}
    />
  );
}
