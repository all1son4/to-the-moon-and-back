import React, { FC } from "react";

import { IIconProps } from "./";

export const VideoIcon: FC<IIconProps> = ({ width = 29, height = 17}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.7">
        <path d="M22.9284 3.19945C24.2855 2.41724 25.4733 1.74838 25.5678 1.71304C25.6624 1.67771 25.9174 1.64696 26.1343 1.64467C26.7977 1.63767 27.3159 1.90203 27.6822 2.43436C28.0199 2.92529 28.0141 2.8171 27.9975 8.34793C27.9826 13.3501 27.982 13.3748 27.8656 13.6264C27.6209 14.1557 27.1489 14.5469 26.579 14.6929C26.2125 14.7867 25.8944 14.7634 25.5231 14.6156C25.4016 14.5672 24.2192 13.9073 22.8954 13.1491L20.4887 11.7705L20.4748 8.19608L20.4609 4.62163L22.9284 3.19945Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0.0876126 2.47369C0.315584 1.36512 1.21796 0.386322 2.29207 0.0825827C2.51289 0.0201581 3.844 0.0049768 9.46445 0.000841594C15.4656 -0.00352019 16.4084 0.00701612 16.6933 0.0817896C17.733 0.3546 18.5767 1.19909 18.8995 2.28999C18.9941 2.60993 19 2.97371 19 8.49279V14.3557L18.8666 14.7731C18.5347 15.8116 17.6946 16.6331 16.6883 16.9032C16.2132 17.0307 2.78061 17.033 2.31626 16.9057C1.22324 16.6059 0.318333 15.634 0.0876126 14.5119C-0.0292042 13.9439 -0.0292042 3.04169 0.0876126 2.47369ZM9.5 12.9999C11.9853 12.9999 14 10.9852 14 8.4999C14 6.01462 11.9853 3.9999 9.5 3.9999C7.01472 3.9999 5 6.01462 5 8.4999C5 10.9852 7.01472 12.9999 9.5 12.9999Z" fill="white"/>
        <circle cx="9.5" cy="8.5" r="2.5" fill="white"/>
      </g>
    </svg>
  );
};

export default VideoIcon;