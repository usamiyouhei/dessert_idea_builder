import type { SVGProps } from "react";

export default function LayeredIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="m4 7 8-4 8 4-8 4-8-4Z" />
        <path d="m4 11 8 4 8-4" />
        <path d="m4 15 8 4 8-4" />
        <path d="m4 19 8 4 8-4" />
      </g>
    </svg>
  );
}
