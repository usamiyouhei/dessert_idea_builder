import React from "react";

type BuilderViewProps = {
  step: number;

  selectedDessertTypes: string[];
  selectedFlavors: string[];
  selectedShapes: string[];
  selectedTextures: string[];
  selectedTemperatures: string[];
  selectedDecorations: string[];
};

export default function BuilderView({
  step,
  selectedDessertTypes,
  selectedFlavors,
  selectedShapes,
  selectedTextures,
  selectedTemperatures,
  selectedDecorations,
}: BuilderViewProps) {
  return <div>Builder View: Step {step + 1}</div>;
}
