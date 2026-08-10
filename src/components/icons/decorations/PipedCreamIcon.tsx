import type { SVGProps } from "react";
export default function PipedCreamIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M6 18.5h12c.4-2.4-.8-4.1-3.3-4.8 1.7-1.8.6-4.1-2.7-4.7.8-1.7.1-3.2-1.2-4.5-.4 2.6-2.1 4.1-3.5 5.5-1.5 1.6-1 3.1.4 4-1.7.9-2.2 2.5-1.7 4.5Z"/><path d="M4.5 18.5h15"/></g></svg>;
}
