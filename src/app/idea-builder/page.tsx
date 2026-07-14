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
  return <BuilderView />;
}
