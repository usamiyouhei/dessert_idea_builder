import type { SVGProps } from "react";

export default function CrispyIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 6 5-2 1.5 6-6 1L5 6ZM14 5l5 2-2 5-5-2 2-5ZM7 14l5-2 2 6-6 2-1-6ZM16 14l3 2-2 4-3-2 2-4Z" />
      </g>
    </svg>
  );
}
