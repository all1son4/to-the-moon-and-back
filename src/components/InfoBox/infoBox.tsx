import React, {FC} from "react";
import styles from './infoBox.module.scss'
import Image from 'next/image'
import {RoundButton} from "../RoundButton/roundButton";

export const InfoBox: FC<IInfoBoxProps> = ({type= 'normal' , text, imageUrl}) => {

  const variant = type !== 'normal' ? [styles.infoBox, styles.infoBoxReversed].join(' ') : styles.infoBox
  return (
    <div className={variant}>
      <div className={styles.info}>
        <div className={styles.text}>
          <div className={styles.gradient}/>
          {text}
        </div>
        <div className={styles.button}>
          <RoundButton amount={2}/>
        </div>
      </div>
      <div className={styles.frame}>
        <Image src={imageUrl} alt={'hall-picture'} className={styles.image} width={690} height={390}/>
      </div>
    </div>
  )
}

export default InfoBox