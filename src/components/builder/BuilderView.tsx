import React, { ReactNode } from "react";

type BuilderViewProps = {
  step: number;
  children: ReactNode;

  selectedDessertTypes: string[];
  selectedFlavors: string[];
  selectedShapes: string[];
  selectedTextures: string[];
  selectedTemperatures: string[];
  selectedDecorations: string[];

  onBack: () => void;
  onNext: () => void;
};

export default function BuilderView({
  step,
  children,
  selectedDessertTypes,
  selectedFlavors,
  selectedShapes,
  selectedTextures,
  selectedTemperatures,
  selectedDecorations,
  onBack,
  onNext,
}: BuilderViewProps) {
  return (
    <section>
      <div>Builder View: Step {step + 1}</div>
      <div>{children}</div>
    </section>
  );
}
