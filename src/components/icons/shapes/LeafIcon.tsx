import type { SVGProps } from "react";

export default function LeafIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.5 3.5C11 4 5.2 8.3 4 17.5c7.8 2.1 14.8-3 16.5-14Z" />
        <path d="M4 20c3.3-5.3 7.6-9.3 13-12" />
      </g>
    </svg>
  );
}
