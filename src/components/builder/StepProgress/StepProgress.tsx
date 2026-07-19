import styles from "./StepProgress.module.scss";

type StepProgressProps = {
  currentStep: number;
  totalStep: number;
};

export default function StepProgress({
  currentStep,
  totalStep,
}: StepProgressProps) {
  return (
    <div className={styles.progressArea}>
      <p className={styles.progressText}>
        Step {currentStep + 1} / {totalStep}
      </p>
      <progress
        className={styles.progress}
        value={currentStep + 1}
        max={totalStep}
      />
    </div>
  );
}
