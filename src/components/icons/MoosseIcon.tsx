import type { SVGProps } from "react";

export default function MousseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <g
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.5 21c.7-6.1 3.6-10 8.5-10s7.8 3.9 8.5 10h-17Z" />
        <path d="M9.5 15.5c2.7.8 4.5.6 6.5-.7 2-1.2 4-1.2 6.3-.2" />
        <circle cx="16" cy="7.5" r="2.5" />
        <path d="M18 6c1-.8 2.1-1 3.2-.5" />
      </g>
    </svg>
  );
}
