import type { SVGProps } from "react";

export default function WarmIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 16h14c0 2.7-3.1 4.5-7 4.5S5 18.7 5 16Z" />
        <path d="M7.5 13c-1.7-2 .9-3.1 0-5.5M12 13c-1.7-2 .9-3.1 0-5.5M16.5 13c-1.7-2 .9-3.1 0-5.5" />
        <path d="M4 16h16" />
      </g>
    </svg>
  );
}
