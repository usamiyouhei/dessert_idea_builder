import type { SVGProps } from "react";

export default function ChewyIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 9c2-3 4.5-3.5 7.5-1.5L15 10c2.5 1.7 4.2.8 5-1" />
        <path d="M4 15c2 3 4.5 3.5 7.5 1.5L15 14c2.5-1.7 4.2-.8 5 1" />
        <path d="M6 9v6M18 10v4" />
      </g>
    </svg>
  );
}
