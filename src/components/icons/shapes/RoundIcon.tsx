import type { SVGProps } from "react";

export default function RoundIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="8" rx="8" ry="4" />
        <path d="M4 8v8c0 2.2 3.6 4 8 4s8-1.8 8-4V8" />
        <path d="M4 15c0 2.2 3.6 4 8 4s8-1.8 8-4" />
      </g>
    </svg>
  );
}
