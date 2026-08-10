import type { SVGProps } from "react";
export default function TuileIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M4 16c2.7-7 7.8-10.5 16-8"/><path d="M5 18c3-5.2 8.1-7.8 15-6"/><path d="m8 12 3 3M12 9l3.5 4M16 7.5l3 4"/></g></svg>;
}
