import type { SVGProps } from "react";
export default function NappageIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M5 18c.7-6.2 3-10 7-10s6.3 3.8 7 10H5Z"/><path d="M6.8 13c2.4.7 4 .5 5.7-.6 1.8-1.1 3.4-1.1 5.2-.3"/><path d="M9 5.5h.01M12 3.5l.5 1.3M15 5.5h.01"/></g></svg>;
}
