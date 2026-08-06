import type { LucideIcon } from "lucide-react";
import styles from "./OptionCard.module.scss";
type OptionCardProps = {
  label: string;
  icon: LucideIcon;
  isSelected: boolean;
  onClick: () => void;
};

export default function OptionCard({
  label,
  icon: Icon,
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
      <div className={styles.left}>
        <Icon className={styles.icon} aria-hidden="true" />
        <span>{label}</span>
      </div>
      <span className={styles.check} aria-hidden="true">
        {isSelected ? "✓" : ""}
      </span>
    </button>
  );
}
