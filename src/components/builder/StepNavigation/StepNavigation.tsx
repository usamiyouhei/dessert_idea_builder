import styles from "./StepNavigation.module.scss";

type StepNavigationProps = {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
  onShowResult: () => void;
};

export default function StepNavigation({
  currentStep,
  totalSteps,
  onBack,
  onNext,
  onShowResult,
}: StepNavigationProps) {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className={styles.navigation}>
      <button
        type="button"
        onClick={onBack}
        disabled={isFirstStep}
        className={styles.backButton}
      >
        戻る
      </button>
      <button
        type="button"
        onClick={isLastStep ? onShowResult : onNext}
        // disabled={currentStep === totalSteps - 1}
        className={styles.nextButton}
      >
        {isLastStep ? "結果を見る" : "次へ"}
      </button>
    </div>
  );
}
