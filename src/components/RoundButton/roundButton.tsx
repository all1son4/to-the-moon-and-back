import React, {FC} from "react";
import styles from './roundButton.module.scss'
import SvgImage from "../SvgImages/svgImage";

export const RoundButton: FC <IRoundButtonProps> = ({direction = 'left', amount = 1}) => {

  const variant = direction !== 'left' ? [styles.roundButton, styles.directionRight].join(' ') : styles.roundButton

  return (
    <div className={variant}>
      {amount === 1 && <SvgImage type={'buttonArrowIcon'}/>}
      {amount === 2 && <>
        <SvgImage type={'buttonArrowIcon'}/>
        <SvgImage type={'buttonArrowIcon'}/>
      </>}
    </div>
  )
}

export default RoundButton