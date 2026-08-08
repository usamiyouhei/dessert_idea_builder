import type { SVGProps } from "react";

export default function CracklyIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 6.5c4.5-2 9.5-2 14 0v11c-4.5 2-9.5 2-14 0v-11Z" />
        <path d="m9 5.5 2 4-2 2 3 2-1 4.5M15 5.5l-2 3 2 2-2 3 2 4" />
      </g>
    </svg>
  );
}
