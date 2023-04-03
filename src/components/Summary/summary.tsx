import React, {FC} from 'react';
import styles from './summary.module.scss'
import SvgImage from "../SvgImages/svgImage";
import {text} from "./summary.contstants";

import {ISummaryProps} from "./sammary.types";

export const Summary: FC<ISummaryProps> = ({cinema, title}) => {

  const backgroundImageStyle = [styles.background, styles[cinema]].join(' ')

  return (
    <div className={styles.wrapper}>
      <div className={styles.gradient}/>
      <div className={backgroundImageStyle}/>
      <div className={styles.backgroundAdditional}/>
      <div className={'container'}>
        <section className={styles.summarySection}>
          <div className={styles.logo}>
            {cinema !== 'arenaCity'
              ? <SvgImage type={'mainLogo'}/>
              : <SvgImage type={'silverScreenLogo'}/>
            }
            <p className={styles.mainText}>{title}</p>
          </div>
          {text[cinema]}
        </section>
      </div>
    </div>
  )
}

export default Summary