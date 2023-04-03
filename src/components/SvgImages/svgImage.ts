import { FC } from 'react'

import {svgConstants} from "./svgImage.contants";

import {SvgImageProps} from "./svgImage.types";

const SvgImage: FC<SvgImageProps> = ({type}) => {
  switch (type) {
    case 'mainLogo': {
      return svgConstants.mainLogo
    }
    case 'silverScreenLogo': {
      return svgConstants.silverScreenLogo
    }
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