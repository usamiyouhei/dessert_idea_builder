import styles from "./StepProgress.module.scss";

type StepProgressProps = {
  currentStep: number;
  totalSteps: number;
};

export default function StepProgress({
  currentStep,
  totalSteps,
}: StepProgressProps) {
  return (
    <div className={styles.progressArea}>
      <p className={styles.progressText}>
        Step {currentStep + 1} / {totalSteps}
      </p>
      <progress
        className={styles.progress}
        value={currentStep + 1}
        max={totalSteps}
      />
    </div>
  );
}
