import type { SVGProps } from "react";

export default function HotIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.5 21c4 0 7-2.7 7-6.5 0-3.2-1.9-5.3-4-7.3.1 2.4-1 3.6-2.1 4.2.2-3.8-1.9-6.5-4.1-8.4.2 4.5-4.8 6.5-4.8 11.5 0 3.8 3.4 6.5 8 6.5Z" />
        <path d="M12 20.8c-1.7-.7-2.5-1.9-2.4-3.3.1-1.6 1.2-2.8 2.4-4.1.1 1.4.8 2.2 1.7 2.8 1.2.8 1.3 2.2.6 3.2-.5.8-1.3 1.2-2.3 1.4Z" />
      </g>
    </svg>
  );
}
