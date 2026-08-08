import type { SVGProps } from "react";

export default function RoomTemperatureIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="m3.5 11 8.5-7 8.5 7" />
        <path d="M5.5 9.5V20h13V9.5" />
        <path d="M9 13h6M9 16h6" />
      </g>
    </svg>
  );
}
