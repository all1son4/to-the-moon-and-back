import React from 'react';
import styles from './gallery.module.scss'
import {RoundButton} from "../RoundButton/roundButton";

export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <h2 className={styles.title}>Галерея</h2>
      <div className={styles.galleryBox}>
        <img src={'/attention.jpeg'} alt={'gallery-image'} className={styles.image}/>
        <img src={'/buffet.jpeg'} alt={'gallery-image'} className={styles.image}/>
        <img src={'/snack.jpeg'} alt={'gallery-image'} className={styles.image}/>
        <img src={'/rest.jpeg'} alt={'gallery-image'} className={styles.image}/>
        <img src={'/screen.jpeg'} alt={'gallery-image'} className={styles.image}/>
      </div>
      <div className={styles.buttonBox}>
        <RoundButton />
        <RoundButton direction={'right'}/>
      </div>
    </div>
  )
}