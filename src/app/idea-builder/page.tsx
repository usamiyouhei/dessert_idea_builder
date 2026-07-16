"use client";
import React, { useState } from "react";
import styles from "./idea-builder.module.scss";
import BuilderView from "@/components/builder/BuilderView";
import DessertTypeStep from "@/components/builder/DessertTypeStep";
import FlavorStep from "@/components/builder/FlavorStep";
import ShapeStep from "@/components/builder/ShapeStep";
import TextureStep from "@/components/builder/TextureStep";
import TemperatureStep from "@/components/builder/TemperatureStep";
import DecorationStep from "@/components/builder/DecorationStep";

export default function HomePage() {
  const [step, setStep] = useState(0);

  const [selectedDessertTypes, setSelectedDessertTypes] = useState<string[]>(
    [],
  );
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [selectedShapes, setSelectedShapes] = useState<string[]>([]);
  const [selectedTextures, setSelectedTextures] = useState<string[]>([]);
  const [selectedTemperatures, setSelectedTemperatures] = useState<string[]>(
    [],
  );
  const [selectedDecorations, setSelectedDecorations] = useState<string[]>([]);

  const toggleOption = (
    value: string,
    setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((selectedValue) => selectedValue !== value)
        : [...prev, value],
    );
  };

  const handleToggleDessertType = (value: string) => {
    toggleOption(value, setSelectedDessertTypes);
  };

  const handleToggleFlavor = (value: string) => {
    toggleOption(value, setSelectedFlavors);
  };

  const handleToggleShape = (value: string) => {
    toggleOption(value, setSelectedShapes);
  };

  const handleToggleTexture = (value: string) => {
    toggleOption(value, setSelectedTextures);
  };

  const handleToggleTemperature = (value: string) => {
    toggleOption(value, setSelectedTemperatures);
  };

  const handleToggleDecoration = (value: string) => {
    toggleOption(value, setSelectedDecorations);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <DessertTypeStep
            selectedValues={selectedDessertTypes}
            onToggle={handleToggleDessertType}
          />
        );

      case 1:
        return (
          <FlavorStep
            selectedValues={selectedFlavors}
            onToggle={handleToggleFlavor}
          />
        );

      case 2:
        return (
          <ShapeStep
            selectedValues={selectedShapes}
            onToggle={handleToggleShape}
          />
        );

      case 3:
        return (
          <TextureStep
            selectedValues={selectedTextures}
            onToggle={handleToggleTexture}
          />
        );

      case 4:
        return (
          <TemperatureStep
            selectedValues={selectedTemperatures}
            onToggle={handleToggleTemperature}
          />
        );

      case 5:
        return (
          <DecorationStep
            selectedValues={selectedDecorations}
            onToggle={handleToggleDecoration}
          />
        );
    }
  };
  return <BuilderView step={step} />;
}
