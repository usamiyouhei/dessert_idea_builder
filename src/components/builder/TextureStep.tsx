import React from "react";
import OptionStep from "./OptionStep/OptionStep";
import { textures } from "@/data/textures";
type TextureStepProps = {
  selectedValues: string[];
  onToggle: (value: string) => void;
};

export default function TextureStep({
  selectedValues,
  onToggle,
}: TextureStepProps) {
  return (
    <OptionStep
      stepLabel="STEP 4"
      title="食感の選択"
      description="複数選択できます"
      options={textures}
      selectedValues={selectedValues}
      onToggle={onToggle}
    />
  );
}
