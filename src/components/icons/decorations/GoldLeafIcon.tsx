import type { SVGProps } from "react";
export default function GoldLeafIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="m8 5 7-2 4 5-2 9-8 4-4-6 3-10Z"/><path d="m9 8 4 2 3-3M8 15l4-2 4 2M12 10v3"/><path d="M3.5 6.5h.01M20.5 18.5h.01"/></g></svg>;
}
