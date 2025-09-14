import React from 'react';

const BrandIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <polygon fill="currentColor" points="50,10 58.82,37.86 88.04,37.64 64.27,54.63 73.51,82.36 50,65 26.49,82.36 35.73,54.63 11.96,37.64 41.18,37.86"/>
  </svg>
);

export default BrandIcon;