import React from "react";
import OptionStep from "./OptionStep/OptionStep";
import { decorations } from "@/data/decorations";

type DecorationStepProps = {
  selectedValues: string[];
  onToggle: (value: string) => void;
};

export default function DecorationStep({
  selectedValues,
  onToggle,
}: DecorationStepProps) {
  return (
    <OptionStep
      stepLabel="STEP 6"
      title="飾りを選択"
      description="複数選択可能"
      options={decorations}
      selectedValues={selectedValues}
      onToggle={onToggle}
    />
  );
}
