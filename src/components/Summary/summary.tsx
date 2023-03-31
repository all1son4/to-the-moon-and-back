import React from 'react';
import styles from './summary.module.scss'
import SvgImage from "../SvgImages/svgImage";

export const Summary = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gradient}/>
      <div className={styles.background}/>
      <div className={styles.backgroundAdditional}/>
      <div className={'container'}>
        <section className={styles.summarySection}>
          <div className={styles.logo}>
            <SvgImage type={'mainLogo'}/>
            <p className={styles.mainText}>в ТРЦ Dana Mall</p>
          </div>
          <div className={styles.info}>
            <p className={styles.addressBlock}>
              ул. Петра Мстиславца, 11, ТРЦ Dana Mall, 3 этаж (г.Минск)
            </p>
            E-mail: <a href={'mailto:info@mooon.by'}>info@mooon.by</a>
            <br/>
            336-90-50 (городской, А1, МТС)
            <br/>
            <span>Вс-Чт с 10:00 до 00:00,</span>
            <br/>
            Пт-Сб с 10:00 до 01:30
          </div>
        </section>
      </div>
    </div>
  )
}