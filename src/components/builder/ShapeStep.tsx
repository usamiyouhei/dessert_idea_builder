import React from "react";
import OptionStep from "./OptionStep/OptionStep";
import { shapes } from "@/data/shapes";
type ShapeStepProps = {
  selectedValues: string[];
  onToggle: (value: string) => void;
};

export default function ShapeStep({
  selectedValues,
  onToggle,
}: ShapeStepProps) {
  return (
    <OptionStep
      stepLabel="STEP 3"
      title="形状の選択"
      description="一つのみ選択可能"
      options={shapes}
      selectedValues={selectedValues}
      onToggle={onToggle}
    />
  );
}
