import React from "react";
type StepNavigationProps = {
  currentStep: number;
  lastStepIndex: number;
  onBack: () => void;
  onNext: () => void;
};

export default function StepNavigation({
  currentStep,
  lastStepIndex,
  onBack,
  onNext,
}: StepNavigationProps) {
  return (
    <div>
      <button type="button" onClick={onBack} disabled={currentStep === 0}>
        Back
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={currentStep === lastStepIndex}
      >
        Next
      </button>
    </div>
  );
}
