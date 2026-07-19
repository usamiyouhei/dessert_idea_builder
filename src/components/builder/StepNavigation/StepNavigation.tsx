import styles from "./StepNavigation.module.scss";

type StepNavigationProps = {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
};

export default function StepNavigation({
  currentStep,
  totalSteps,
  onBack,
  onNext,
}: StepNavigationProps) {
  return (
    <div className={styles.navigation}>
      <button
        type="button"
        onClick={onBack}
        disabled={currentStep === 0}
        className={styles.backButton}
      >
        Back
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={currentStep === totalSteps - 1}
        className={styles.nextButton}
      >
        Next
      </button>
    </div>
  );
}
