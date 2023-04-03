import React, { FC } from "react";

import { IIconProps } from "./";

export const SplitterIcon: FC<IIconProps> = ({ width = 10, height = 12, fill = 'white' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.1">
        <path d="M0 5.99973C0 3.04349 2.19949 0.976562 5 0.976562C7.80052 0.976562 10 3.04349 10 5.99973C10 8.95597 7.8018 11.0229 5 11.0229C2.19949 11.0216 0 8.95468 0 5.99973ZM8.06821 5.99973C8.06821 4.04863 6.68082 2.75391 5 2.75391C3.31918 2.75391 1.93179 4.04863 1.93179 5.99973C1.93179 7.95082 3.31918 9.24555 5 9.24555C6.68082 9.24555 8.06821 7.95082 8.06821 5.99973Z"
              fill={fill}/>
      </g>
    </svg>
  );
};

export default SplitterIcon;
