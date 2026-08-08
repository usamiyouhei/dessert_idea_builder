import type { SVGProps } from "react";

export default function CreamyIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15c3.2-6.8 7.4-10 12-8.5 4.9 1.6 5.2 7.6 1.5 10.6-3.2 2.6-8.6 1.7-7.5-2 .8-2.5 4.2-3 6-1.1" />
      </g>
    </svg>
  );
}
