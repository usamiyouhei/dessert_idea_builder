import type { SVGProps } from "react";

export default function FluffyIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.2 18.5a4.2 4.2 0 0 1-.8-8.3A5.8 5.8 0 0 1 17.5 9a4.8 4.8 0 0 1-.7 9.5H7.2Z" />
        <path d="M8.5 15.5c2.3 1.1 4.7 1.1 7 0" />
      </g>
    </svg>
  );
}
