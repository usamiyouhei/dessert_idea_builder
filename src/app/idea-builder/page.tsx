"use client";
import React, { useState } from "react";
import styles from "./idea-builder.module.scss";
import BuilderView from "@/components/builder/BuilderView";

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
  return <BuilderView step={step} />;
}
