import type { SVGProps } from "react";
export default function MintIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M12 12C7 12 4.2 9.4 4 5c4.3-.3 7.2 2 8 7ZM12 12c5 0 7.8-2.6 8-7-4.3-.3-7.2 2-8 7Z"/><path d="M12 12v8M7 7l5 5M17 7l-5 5"/></g></svg>;
}
