import type { SVGProps } from "react";
export default function SugarArtIcon({ strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M12 21V10"/><path d="M12 16c-4.8-1-7.2-4-6-7.5 1.3-3.8 7.7-5 11-2.2 3.8 3.3 1.3 8.6-2.4 8.2-2.8-.3-3.4-3.7-1.1-5.1 1.2-.8 2.7-.2 3.1.9"/><path d="M9 21h6"/></g></svg>;
}
