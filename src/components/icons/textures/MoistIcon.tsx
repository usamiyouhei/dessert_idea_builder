import type { SVGProps } from "react";

export default function MoistIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8c4.3-2.7 9.7-2.7 14 0v9c-4.3 2.7-9.7 2.7-14 0V8Z" />
        <path d="M5 8c4.3 2.7 9.7 2.7 14 0" />
        <path d="M12 10.5c1.4 1.9 2.2 3.1 2.2 4.4a2.2 2.2 0 0 1-4.4 0c0-1.3.8-2.5 2.2-4.4Z" />
      </g>
    </svg>
  );
}
