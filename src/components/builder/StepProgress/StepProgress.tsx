import React from "react";
type StepProgressProps = {
  currentStep: number;
  totalStep: number;
};

export default function StepProgress({
  currentStep,
  totalStep,
}: StepProgressProps) {
  return (
    <div>
      <p>
        Step {currentStep + 1} / {totalStep}
      </p>
      <progress value={currentStep + 1} max={totalStep} />
    </div>
  );
}
