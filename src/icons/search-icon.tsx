import { SVGProps, forwardRef } from 'react';

export const SearchIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="currentColor"
    viewBox="0 0 18 18"
    {...props}
  >
    <path d="M7.543.752a6.791 6.791 0 1 0 4.243 12.094l4.185 4.185a.75.75 0 0 0 1.06-1.06l-4.184-4.185A6.791 6.791 0 0 0 7.544.752ZM2.252 7.543a5.291 5.291 0 1 1 10.583 0 5.291 5.291 0 0 1-10.583 0Z" />
  </svg>
));

SearchIcon.displayName = 'SearchIcon';
