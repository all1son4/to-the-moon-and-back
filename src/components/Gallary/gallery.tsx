import React from 'react';
import Image from 'next/image'
import styles from './gallery.module.scss'
import {RoundButton} from "../RoundButton/roundButton";

export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <h2 className={styles.title}>Галерея</h2>
      <div className={styles.galleryBox}>
        <Image src={'/attention.jpeg'} alt={'gallery-image'} className={styles.image}/>
        <Image src={'/buffet.jpeg'} alt={'gallery-image'} className={styles.image}/>
        <Image src={'/snack.jpeg'} alt={'gallery-image'} className={styles.image}/>
        <Image src={'/rest.jpeg'} alt={'gallery-image'} className={styles.image}/>
        <Image src={'/screen.jpeg'} alt={'gallery-image'} className={styles.image}/>
      </div>
      <div className={styles.buttonBox}>
        <RoundButton />
        <RoundButton direction={'right'}/>
      </div>
    </div>
  )
}