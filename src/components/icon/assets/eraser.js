import * as React from 'react';

const EuiIconEraser = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.648 9.937l7.29-7.288a2.21 2.21 0 013.124 0l2.29 2.288a2.21 2.21 0 010 3.126L10.413 13H12.5a.5.5 0 010 1H4.501a2.21 2.21 0 01-1.563-.647l.707-.707c.227.226.535.354.856.354h4.005a1.21 1.21 0 00.848-.354l1.292-1.293-4-4-3.29 3.291a1.21 1.21 0 000 1.712l.29.29-.708.707-.29-.29a2.21 2.21 0 010-3.126zM8 6h6.89a1.208 1.208 0 00-.246-.356L14 5H9L8 6zm2-2h3l-.645-.644a1.21 1.21 0 00-1.71 0L10 4zm4.89 3H7.708l1 1H14l.644-.644A1.22 1.22 0 0014.891 7zM9.708 9l1.646 1.646L13 9H9.707z" />
    <path d="M14 11.5a.5.5 0 11-1 0 .5.5 0 011 0zm1.5-.5a.5.5 0 100-1 .5.5 0 000 1zm-1 2a.5.5 0 000 1h1a.5.5 0 000-1h-1z" />
  </svg>
);

export const icon = EuiIconEraser;
