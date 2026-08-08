import type { SVGProps } from "react";

export default function MatchaIcon({
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
        <path d="M5 10.5h14c-.2 5.5-2.5 8.5-7 8.5s-6.8-3-7-8.5Z" />
        <path d="M4 19.5h16M15.5 4.5l-3 6M17.8 5.8l-1.3 4.7M13.2 4l1 3" />
      </g>
    </svg>
  );
}
