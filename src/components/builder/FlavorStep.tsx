import React from "react";
import OptionStep from "./OptionStep/OptionStep";
import { flavors } from "@/data/flavors";

type FlavorStepProps = {
  selectedValues: string[];
  onToggle: (value: string) => void;
};

export default function FlavorStep({
  selectedValues,
  onToggle,
}: FlavorStepProps) {
  return (
    <OptionStep
      stepLabel="STEP 2"
      title="フレーバーを選択できます"
      description="複数選択できます"
      options={flavors}
      selectedValues={selectedValues}
      onToggle={onToggle}
    ></OptionStep>
  );
}
