import type { SVGProps } from "react";

export default function CitrusIcon({
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
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2.2" />
        <path d="M12 4v5.8M12 14.2V20M4 12h5.8M14.2 12H20M6.3 6.3l4.1 4.1M13.6 13.6l4.1 4.1M17.7 6.3l-4.1 4.1M10.4 13.6l-4.1 4.1" />
      </g>
    </svg>
  );
}
