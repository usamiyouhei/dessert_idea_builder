import type { SVGProps } from "react";

export default function VanillaIcon({
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
        <path d="M12 11.7c-1.3-3.8-.4-6.5 2.3-8.2 1.2 3.2.5 5.9-2.3 8.2Z" />
        <path d="M12 11.7c3.8-1.3 6.5-.4 8.2 2.3-3.2 1.2-5.9.5-8.2-2.3Z" />
        <path d="M12 11.7c1.3 3.8.4 6.5-2.3 8.2-1.2-3.2-.5-5.9 2.3-8.2Z" />
        <path d="M12 11.7c-3.8 1.3-6.5.4-8.2-2.3 3.2-1.2 5.9-.5 8.2 2.3Z" />
        <circle cx="12" cy="11.7" r="1.2" />
      </g>
    </svg>
  );
}
