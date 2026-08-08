import type { SVGProps } from "react";

export default function CoffeeIcon({
  strokeWidth = 1.8,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="12" rx="6.5" ry="9" transform="rotate(35 12 12)" />
        <path d="M17.2 5.7c-.8 4-3.2 5.1-5.4 6.2-2.4 1.2-4.5 2.7-5 6.4" />
      </g>
    </svg>
  );
}
