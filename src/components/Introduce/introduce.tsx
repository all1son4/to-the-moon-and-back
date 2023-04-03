import React, {FC} from 'react';
import styles from './introduce.module.scss'
import SvgImage from "../SvgImages/svgImage";

import { MapIcon } from '@/icons';
import FourKIcon from "../../icons/4Kicon";
import ImaxIcon from "../../icons/ImaxIcon";

import {IIntroduceProps} from "./introduce.types";

export const Introduce: FC<IIntroduceProps> = ({title, address, cinema}) => {

  const backgroundImageStyle = [styles.background, styles[cinema]].join(' ')

  const anotherIcon = () => {
    return cinema !== 'triniti'
      ? <div className={styles.arenaCitySpecial}><FourKIcon /></div>
      : <div className={styles.trinitiSpecial}><ImaxIcon /></div>
  }

  return (
    <div className={styles.wrapper}>
      <div className={backgroundImageStyle}/>
      <div className={styles.gradient}/>
      <div className={'container'}>
        <section className={styles.introduceSection}>
          <h1 className={styles.title}>
            {cinema !== 'arenaCity'
              ? <SvgImage type={'mainLogo'}/>
              : <SvgImage type={'silverScreenLogo'}/>}
            <p>{title}</p>
          </h1>
          <div className={styles.address}>
            <MapIcon />
            <p className={styles.addressText}>
              {address}
            </p>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.iconBox}>
              <SvgImage type={'dolbyAtmos'}/>
            </div>
            <div className={styles.iconBox}>
              {cinema === 'danaMall' || cinema === 'palazzo'
                ? <SvgImage type={'screenX'}/>
                : anotherIcon()
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Introduce