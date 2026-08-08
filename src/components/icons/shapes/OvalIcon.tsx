import type { SVGProps } from "react";

export default function OvalIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="9" ry="6.5" />
      </g>
    </svg>
  );
}
