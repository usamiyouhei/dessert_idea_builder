import type { SVGProps } from "react";

export default function TartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="4 4 24 24" fill="none" aria-hidden="true" {...props}>
      <g
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.5 17h19l-2 8h-15l-2-8Z" />
        <path d="M8 20h16" />
        <path d="m9 20 1.5 2 1.5-2 1.5 2 1.5-2 1.5 2 1.5-2 1.5 2 1.5-2 1.5 2 1.5-2" />
        <path d="M8 17c1.5-2.2 4.2-3.5 8-3.5s6.5 1.3 8 3.5" />
        <circle cx="16" cy="10.5" r="2.5" />
      </g>
    </svg>
  );
}
