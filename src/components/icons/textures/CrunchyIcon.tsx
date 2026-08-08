import type { SVGProps } from "react";

export default function CrunchyIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="m4 8 5-4 4 3-2 5-6 1-1-5ZM14 5l5 1 1 5-4 3-4-3 2-6ZM7 15l5-2 4 3-2 5H8l-1-6Z" />
        <path d="m16 16 4-1-1 5-3-4Z" />
      </g>
    </svg>
  );
}
