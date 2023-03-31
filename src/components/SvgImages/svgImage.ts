import React, { FC } from 'react'

import {svgConstants} from "./svgImages.contants";

interface SvgImageProps {
  type: string
}

const SvgImage: FC<SvgImageProps> = ({type}) => {
  switch (type) {
    case 'mainLogo':
      return svgConstants.mainLogo
    case 'mapIcon': {
      return svgConstants.mapIcon
    }
    case 'dolbyAtmos': {
      return svgConstants.dolbyAtmos
    }
    case 'screenX': {
      return svgConstants.screenX
    }
    case 'buttonArrowIcon': {
      return svgConstants.buttonArrowIcon
    }
    default: return null
  }
}

export default SvgImage