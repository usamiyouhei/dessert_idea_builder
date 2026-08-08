import type { SVGProps } from "react";

export default function ConeIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-7 15M12 3l7 15" />
        <ellipse cx="12" cy="18" rx="7" ry="3" />
      </g>
    </svg>
  );
}
