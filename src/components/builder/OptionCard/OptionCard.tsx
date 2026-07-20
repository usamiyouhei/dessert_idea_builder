import styles from "./OptionCard.module.scss";
type OptionCardProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

export default function OptionCard({
  label,
  isSelected,
  onClick,
}: OptionCardProps) {
  return (
    <button
      type="button"
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      aria-pressed={isSelected}
      onClick={onClick}
    >
      <span>{label}</span>
      <span className={styles.check} aria-hidden="true">
        {isSelected ? "✓" : ""}
      </span>
    </button>
  );
}
