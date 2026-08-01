import React from "react";
import styles from "./ResultItem.module.scss";

type ResultItemProps = {
  label: string;
  values: string[];
};

export default function ResultItem({ label, values }: ResultItemProps) {
  return (
    <div className={styles.resultItem}>
      <p className={styles.itemLabel}>{label}</p>

      <div className={styles.tags}>
        {values.length > 0 ? (
          values.map((value) => (
            <span className={styles.tag} key={value}>
              {value}
            </span>
          ))
        ) : (
          <span className={styles.emptyValue}>選択なし</span>
        )}
      </div>
    </div>
  );
}
