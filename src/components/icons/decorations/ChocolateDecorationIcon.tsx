import type { SVGProps } from "react";
export default function ChocolateDecorationIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M5 20c1-7.5 4-13 8.5-15.5 2.7-1.5 5.5-.2 5.5 2.2 0 3.7-5.8 5.1-8.6 2.7-2.3-2-1-5.1 1.6-6.4"/><path d="M8 20c.8-4.5 3-7 6.5-7 2.8 0 4.2 2.1 3.1 4-1 1.8-3.6 1.4-4.1-.4"/><path d="M4 20h16"/></g></svg>;
}
