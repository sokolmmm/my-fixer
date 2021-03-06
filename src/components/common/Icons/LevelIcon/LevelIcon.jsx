/* eslint-disable react/prop-types */
import React from 'react';
import styles from './LevelIcon.module.scss';

function LevelIcon({ rating }) {
  return (
    <svg
      className={styles[rating]}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_557_323)">
        <circle cx="13" cy="12" r="8" fill="white" />
      </g>
      <path
        d="M18.6001 10.4683L14.8907 9.68539L13.0001 6.39966V15.5044L16.461 17.0514L16.0593 13.2817L18.6001 10.4683Z"
        fill="none"
      />
      <path
        d="M11.1094 9.68576L7.4 10.4686L9.94083 13.2821L9.5391 17.0517L13 15.5047V6.40002L11.1094 9.68576Z"
        fill="none"
      />
      <defs>
        <filter
          id="filter0_d_557_323"
          x="0"
          y="0"
          width="26"
          height="26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.513291 0 0 0 0 0.541829 0 0 0 0 0.635371 0 0 0 0.24 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_557_323"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_557_323"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default LevelIcon;
