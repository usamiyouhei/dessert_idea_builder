import { ReactNode } from "react";
import styles from "./BuilderView.module.scss";
import StepProgress from "./StepProgress/StepProgress";
import StepNavigation from "./StepNavigation/StepNavigation";

type BuilderViewProps = {
  step: number;
  children: ReactNode;

  // selectedDessertTypes: string[];
  // selectedFlavors: string[];
  // selectedShapes: string[];
  // selectedTextures: string[];
  // selectedTemperatures: string[];
  // selectedDecorations: string[];

  onBack: () => void;
  onNext: () => void;
};

export default function BuilderView({
  step,
  children,
  // selectedDessertTypes,
  // selectedFlavors,
  // selectedShapes,
  // selectedTextures,
  // selectedTemperatures,
  // selectedDecorations,
  onBack,
  onNext,
}: BuilderViewProps) {
  const totalSteps = 6;
  return (
    <section className={styles.builderView}>
      <StepProgress currentStep={step} totalStep={totalSteps} />

      <div className={styles.card}>
        <div className={styles.content}>{children}</div>
        <StepNavigation
          currentStep={step}
          totalSteps={totalSteps}
          onBack={onBack}
          onNext={onNext}
        />
      </div>
    </section>
  );
}
