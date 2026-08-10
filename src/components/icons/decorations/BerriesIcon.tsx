import type { SVGProps } from "react";
export default function BerriesIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="14" r="4"/><circle cx="15.5" cy="14.5" r="3.5"/><circle cx="12.5" cy="9" r="3.5"/><path d="M12.5 5.5c-1.4-2-3.3-2.5-5.5-1.5 1 1.6 2.4 2.4 4.2 2.5M13.5 6c1.2-1.8 2.8-2.3 4.7-1.3"/></g></svg>;
}
