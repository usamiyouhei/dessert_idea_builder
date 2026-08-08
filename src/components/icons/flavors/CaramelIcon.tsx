import type { SVGProps } from "react";

export default function CaramelIcon({
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
        <path d="m7 8-4-2 2 6-2 6 4-2M17 8l4-2-2 6 2 6-4-2" />
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9.5 10h5M9.5 14h5" />
      </g>
    </svg>
  );
}
