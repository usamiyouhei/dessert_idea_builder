import type { SVGProps } from "react";
export default function EdibleFlowersIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M12 10c-2.7-4.3-1.2-7 0-7s2.7 2.7 0 7ZM12 10c4.3-2.7 7-1.2 7 0s-2.7 2.7-7 0ZM12 10c2.7 4.3 1.2 7 0 7s-2.7-2.7 0-7ZM12 10c-4.3 2.7-7 1.2-7 0s2.7-2.7 7 0Z"/><circle cx="12" cy="10" r="1.5"/><path d="M12 17v4M12 19c2-1.7 3.7-2 5-1"/></g></svg>;
}
