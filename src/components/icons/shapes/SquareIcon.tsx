import type { SVGProps } from "react";

export default function SquareIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="m4 7 8-3 8 3-8 3-8-3Z" />
        <path d="M4 7v10l8 3 8-3V7M12 10v10" />
      </g>
    </svg>
  );
}
