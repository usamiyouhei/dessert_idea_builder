import type { SVGProps } from "react";

export default function PyramidIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-8.5 14L12 21l8.5-4L12 3Z" />
        <path d="M12 3v18M3.5 17h17" />
      </g>
    </svg>
  );
}
