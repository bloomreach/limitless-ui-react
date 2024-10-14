import { SVGProps, forwardRef } from 'react';

export const CloseIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M3.529 2.47a.75.75 0 1 0-1.06 1.06L6.938 8l-4.47 4.47a.75.75 0 0 0 1.06 1.06L8 9.06l4.47 4.47a.75.75 0 1 0 1.06-1.06L9.06 8l4.47-4.47a.75.75 0 1 0-1.061-1.06l-4.47 4.47-4.47-4.47Z" />
  </svg>
));

CloseIcon.displayName = 'CloseIcon';
