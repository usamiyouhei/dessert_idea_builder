import React from "react";
import OptionStep from "./OptionStep/OptionStep";
import { temperatures } from "@/data/temperatures";

type TemperatureStepProps = {
  selectedValues: string[];
  onToggle: (value: string) => void;
};

export default function TemperatureStep({
  selectedValues,
  onToggle,
}: TemperatureStepProps) {
  return (
    <OptionStep
      stepLabel="STEP 5"
      title="温度感の選択"
      description="一つのみ選択可能"
      options={temperatures}
      selectedValues={selectedValues}
      onToggle={onToggle}
    />
  );
}
