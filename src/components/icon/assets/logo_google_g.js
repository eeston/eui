import * as React from 'react';

const EuiIconLogoGoogleG = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    width={32}
    height={32}
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <path
        id="a"
        d="M15.319 3.278c0-1.131-.102-2.22-.29-3.264H0v6.172h8.587c-.37 1.995-1.494 3.685-3.184 4.816v4.004h5.157c3.017-2.778 4.758-6.869 4.758-11.728z"
      />
      <path
        id="c"
        d="M14.343 12.956c4.308 0 7.92-1.43 10.56-3.866l-5.157-4.004c-1.429.958-3.256 1.523-5.403 1.523-4.156 0-7.674-2.806-8.928-6.578H.084v4.134c2.625 5.215 8.021 8.79 14.259 8.79z"
      />
      <path
        id="e"
        d="M7.028 10.25a9.59 9.59 0 01-.5-3.032 9.59 9.59 0 01.5-3.032V.052h-5.33A15.95 15.95 0 000 7.218c0 2.575.617 5.012 1.697 7.166l5.331-4.134z"
      />
      <path
        id="g"
        d="M14.343 6.392c2.342 0 4.446.805 6.1 2.386l4.576-4.576C22.256 1.627 18.644.046 14.343.046 8.105.046 2.709 3.622.083 8.836l5.332 4.134c1.254-3.77 4.772-6.578 8.928-6.578z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(15.955 13.087)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          fill="#4285F4"
          fillRule="nonzero"
          mask="url(#b)"
          d="M.001 15.006h15.318V.014H.001z"
        />
      </g>
      <g transform="translate(1.613 19.003)">
        <mask id="d" fill="#fff">
          <use xlinkHref="#c" />
        </mask>
        <path
          fill="#34A853"
          fillRule="nonzero"
          mask="url(#d)"
          d="M.084 12.956h24.819V.031H.084z"
        />
      </g>
      <g transform="translate(0 8.784)">
        <mask id="f" fill="#fff">
          <use xlinkHref="#e" />
        </mask>
        <path
          fill="#FBBC04"
          fillRule="nonzero"
          mask="url(#f)"
          d="M0 14.384h7.028V.052H0z"
        />
      </g>
      <g transform="translate(1.613)">
        <mask id="h" fill="#fff">
          <use xlinkHref="#g" />
        </mask>
        <path
          fill="#EA4335"
          fillRule="nonzero"
          mask="url(#h)"
          d="M.084 12.97h24.935V.046H.084z"
        />
      </g>
    </g>
  </svg>
);

export const icon = EuiIconLogoGoogleG;
