import type { SVGProps } from "react";
export default function ChocolatePartsIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h14v16H5z"/><path d="M9.7 4v16M14.3 4v8M5 9.3h14M5 14.7h9.3"/><path d="m14.3 14.7 2.3-2.7 2.4 2.7-2.4 2.4L19 20h-4.7v-5.3Z"/></g></svg>;
}
