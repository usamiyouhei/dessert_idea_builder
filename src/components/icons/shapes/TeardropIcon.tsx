import type { SVGProps } from "react";

export default function TeardropIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3C9.5 7.2 5.5 11.1 5.5 15a6.5 6.5 0 0 0 13 0C18.5 11.1 14.5 7.2 12 3Z" />
        <path d="M9 16.5c.5 1.1 1.4 1.7 2.7 1.8" />
      </g>
    </svg>
  );
}
