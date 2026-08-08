import type { SVGProps } from "react";

export default function SphereIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M8.2 7.8c1.1-1.1 2.4-1.7 3.8-1.7" />
        <path d="M5.4 15.4c4.3 1.7 8.9 1.7 13.2 0" />
      </g>
    </svg>
  );
}
