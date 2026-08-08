import type { SVGProps } from "react";

export default function StickyIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7c4-2 12-2 16 0v5c-2 1.5-3.5.5-4.5-.5-1.2-1.2-2.5-.4-2.5 1.2V18a2 2 0 0 1-4 0v-5.3c0-1.6-1.4-2.4-2.6-1.2C5.4 12.5 4 13 4 12V7Z" />
        <path d="M4 7c4 2 12 2 16 0" />
      </g>
    </svg>
  );
}
