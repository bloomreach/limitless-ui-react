import { SVGProps, forwardRef } from 'react';

export const ArrowRight = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M13.3 8.53a.75.75 0 0 0 0-1.06L8.98 3.15a.75.75 0 0 0-1.06 1.06l3.039 3.04H2.212c-.382 0-.691.335-.691.75 0 .414.31.75.69.75h8.748l-3.04 3.04a.75.75 0 0 0 1.061 1.06l4.32-4.32Z" />
  </svg>
));

ArrowRight.displayName = 'ArrowRight';
