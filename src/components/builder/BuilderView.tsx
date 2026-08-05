import { ReactNode } from "react";
import styles from "./BuilderView.module.scss";
import StepProgress from "./StepProgress/StepProgress";
import StepNavigation from "./StepNavigation/StepNavigation";

type BuilderViewProps = {
  step: number;
  children: ReactNode;
  onBack: () => void;
  onNext: () => void;
  onShowResult: () => void;
};

export default function BuilderView({
  step,
  children,
  onBack,
  onNext,
  onShowResult,
}: BuilderViewProps) {
  const totalSteps = 6;
  return (
    <section className={styles.builderView}>
      <StepProgress currentStep={step} totalSteps={totalSteps} />

      <div className={styles.card}>
        <div className={styles.content}>{children}</div>

        <div className={styles.navigation}>
          <StepNavigation
            currentStep={step}
            totalSteps={totalSteps}
            onBack={onBack}
            onNext={onNext}
            onShowResult={onShowResult}
          />
        </div>
      </div>
    </section>
  );
}
