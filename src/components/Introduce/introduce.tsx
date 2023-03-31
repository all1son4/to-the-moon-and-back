import React from 'react';
import styles from './introduce.module.scss'
import SvgImage from "../SvgImages/svgImage";

export const Introduce = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}/>
      <div className={styles.gradient}/>
      <div className={'container'}>
        <section className={styles.introduceSection}>
          <h1 className={styles.title}>
            <SvgImage type={'mainLogo'}/>
            <p>в ТРЦ Dana Mall</p>
          </h1>
          <div className={styles.address}>
            <SvgImage type={'mapIcon'}/>
            <p className={styles.addressText}>
              г. Минск, ул.Петра Мстиславца, 11, ТРЦ Dana Mall, 3 этаж
            </p>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.iconBox}>
              <SvgImage type={'dolbyAtmos'}/>
            </div>
            <div className={styles.iconBox}>
              <SvgImage type={'screenX'}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}