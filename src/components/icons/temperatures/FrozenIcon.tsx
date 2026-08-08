import type { SVGProps } from "react";

export default function FrozenIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
        <path d="m9.5 5.5 2.5 2 2.5-2M9.5 18.5l2.5-2 2.5 2" />
        <path d="m5 10.5 3-.7.8-3M19 13.5l-3 .7-.8 3" />
        <path d="m5 13.5 3 .7.8 3M19 10.5l-3-.7-.8-3" />
      </g>
    </svg>
  );
}
