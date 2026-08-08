import type { SVGProps } from "react";

export default function JigglyIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 17c.6-6 2.5-10 6-10s5.4 4 6 10H6Z" />
        <path d="M4 19c2-1 3-1 5 0s4 1 6 0 3-1 5 0" />
        <path d="m4 8-1 2 1 2M20 8l1 2-1 2" />
      </g>
    </svg>
  );
}
