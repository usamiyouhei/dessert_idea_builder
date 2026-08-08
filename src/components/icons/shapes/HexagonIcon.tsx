import type { SVGProps } from "react";

export default function HexagonIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 3.5-5 8.5 5 8.5h8l5-8.5-5-8.5H8Z" />
      </g>
    </svg>
  );
}
