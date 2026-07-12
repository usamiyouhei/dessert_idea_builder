import React from "react";

type OptionCardProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

export default function OptionCard({
  label,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <button type="button" aria-pressed={selected} onClick={onClick}>
      {label}
      {selected && <span>✓</span>}
    </button>
  );
}
