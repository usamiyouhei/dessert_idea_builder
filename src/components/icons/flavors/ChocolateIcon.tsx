import type { SVGProps } from "react";

export default function ChocolateIcon({
  strokeWidth = 1.8,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 4.5h12v15H6z" />
        <path d="M10 4.5v15M14 4.5v15M6 9.5h12M6 14.5h12" />
        <path d="m15.2 4.5 2.8 2.8" />
      </g>
    </svg>
  );
}
