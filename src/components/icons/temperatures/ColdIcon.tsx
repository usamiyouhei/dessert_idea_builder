import type { SVGProps } from "react";

export default function ColdIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 8h10c2.3 0 3.1-3 1-3.8-1.3-.5-2.5.2-2.8 1.3" />
        <path d="M3.5 12h14c3.2 0 3.6 4.3.7 5.1-1.8.5-3.4-.5-3.8-2" />
        <path d="M3.5 16h6" />
        <path d="m19 6 .7.7M21.3 8.3l-.7-.7M21 5.7l-2.7 2.7" />
      </g>
    </svg>
  );
}
