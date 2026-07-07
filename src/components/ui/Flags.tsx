import React from 'react';

export const FlagColombia = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 36 36" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="4" fill="#FCD116"/>
    <rect y="18" width="36" height="9" fill="#003893"/>
    <rect y="27" width="36" height="9" fill="#CE1126"/>
  </svg>
);

export const FlagChile = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 36 36" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="4" fill="#FFFFFF"/>
    <rect y="18" width="36" height="18" fill="#D52B1E"/>
    <path d="M0 4C0 1.79086 1.79086 0 4 0H12V18H0V4Z" fill="#0039A6"/>
    <polygon fill="#FFFFFF" points="6,3.5 7.5,7.5 11.5,7.5 8.5,10 9.5,14 6,11.5 2.5,14 3.5,10 0.5,7.5 4.5,7.5"/>
  </svg>
);

export const FlagMexico = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 36 36" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="4" fill="#FFFFFF"/>
    <path d="M0 4C0 1.79086 1.79086 0 4 0H12V36H0V4Z" fill="#006847"/>
    <path d="M24 0H32C34.2091 0 36 1.79086 36 4V36H24V0Z" fill="#CE1126"/>
    <circle cx="18" cy="18" r="3" fill="#8C734B"/>
  </svg>
);

export const FlagPeru = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 36 36" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="4" fill="#FFFFFF"/>
    <path d="M0 4C0 1.79086 1.79086 0 4 0H12V36H0V4Z" fill="#D91023"/>
    <path d="M24 0H32C34.2091 0 36 1.79086 36 4V36H24V0Z" fill="#D91023"/>
    <rect x="16" y="16" width="4" height="4" fill="#D91023"/>
  </svg>
);
