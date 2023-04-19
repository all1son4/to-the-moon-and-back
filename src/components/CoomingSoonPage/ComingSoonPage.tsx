import React from "react";

import styles from "./ComingSoonPage.module.scss"
import SvgImage from "../SvgImages";
import Button from "../Button/button";

export const ComingSoonPage = () => {

  const buttonHandler = () => {
    window.open('https://silverscreen.by/', '_self')
  }

  return (
    <div className={styles.main}>
      <div className={styles.background}/>
      <div className={'container'}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <SvgImage type={'mainLogo'}/>
            <h1 className={styles.title}>COMING SOON</h1>
          </div>
          <div className={styles.typography}>
            <p className={styles.info}>Наш новый сайт находится в разработке. Но совсем скоро он появится во всех браузерах страны</p>
            <p className={styles.info}>А пока все киноновинки ждут вас на silverscreen.by</p>
            <div className={styles.buttonWrapper}>
              <Button
                buttonText={'Перейти на silverscreen.by'}
                customStyle={styles.button}
                onClick={buttonHandler}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
