import type { SVGProps } from "react";
export default function NutsIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 20c-4.7-2.2-5.7-6.8-2.6-10.2C8 7.5 10.5 5.9 12 3c1.4 4.5 2.2 8.3.5 12.2C11.6 17.4 10.2 19 8.5 20Z"/><path d="M9 17c-.2-3.6.7-6.8 2.6-9.7"/><path d="M15 19c-1.7-2.5-1.2-5.2 1.2-7 1.6-1.2 3.1-1.6 4.3-3 .8 3.5.3 6.4-1.6 8.3-1.1 1.1-2.4 1.7-3.9 1.7Z"/></g></svg>;
}
