import type { SVGProps } from "react";

export default function StrawberryIcon({
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
        <path d="M6.4 9c.4 6 2.3 9.9 5.6 11.5 3.3-1.6 5.2-5.5 5.6-11.5-2.8-1.8-8.4-1.8-11.2 0Z" />
        <path d="M9.2 7.8c-.3-2 1-3.3 2.8-4.3.1 2.1-.5 3.5-1.8 4.2M14.8 7.8c.3-2-1-3.3-2.8-4.3M8.6 6.7c-1.2-.9-2.5-.9-3.7-.2 1.1 1.2 2.3 1.8 3.7 1.7M15.4 6.7c1.2-.9 2.5-.9 3.7-.2-1.1 1.2-2.3 1.8-3.7 1.7" />
        <path d="M10 11.5h.01M14 11.5h.01M12 15h.01" />
      </g>
    </svg>
  );
}
