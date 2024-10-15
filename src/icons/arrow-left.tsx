import { SVGProps, forwardRef } from 'react';

export const ArrowLeft = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M1.74 7.47a.75.75 0 0 0 0 1.06l4.32 4.32a.75.75 0 1 0 1.06-1.06L4.082 8.75h8.747c.382 0 .692-.336.692-.75 0-.415-.31-.75-.692-.75H4.081l3.04-3.04a.75.75 0 0 0-1.06-1.06L1.74 7.47Z" />
  </svg>
));

ArrowLeft.displayName = 'ArrowLeft';
