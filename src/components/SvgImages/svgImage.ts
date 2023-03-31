import {svgConstants} from "./svgImages.contants";

function SvgImage({type}) {
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