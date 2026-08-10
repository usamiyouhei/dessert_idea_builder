import type { SVGProps } from "react";
export default function FruitsIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M12 8c-5-2.5-8.5.5-8 5.2.5 4.2 4 7.3 8 7.3s7.5-3.1 8-7.3C20.5 8.5 17 5.5 12 8Z"/><path d="M12 8c-.2-2.4.8-4.1 3-5"/><path d="M13 5.5c2.3-1.7 4.3-1.6 6 .1-2.2 1.4-4.2 1.4-6-.1Z"/></g></svg>;
}
