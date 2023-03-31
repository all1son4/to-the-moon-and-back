import React from 'react';
import Image from 'next/image'
import styles from './gallery.module.scss'
import {RoundButton} from "../RoundButton/roundButton";

export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <h2 className={styles.title}>Галерея</h2>
      <div className={styles.galleryBox}>
        <Image src={'/attention.jpeg'} alt={'gallery-image'} className={styles.image} width={335} height={205}/>
        <Image src={'/buffet.jpeg'} alt={'gallery-image'} className={styles.image} width={335} height={205}/>
        <Image src={'/snack.jpeg'} alt={'gallery-image'} className={styles.image} width={335} height={205}/>
        <Image src={'/rest.jpeg'} alt={'gallery-image'} className={styles.image} width={335} height={205}/>
        <Image src={'/screen.jpeg'} alt={'gallery-image'} className={styles.image} width={335} height={205}/>
      </div>
      <div className={styles.buttonBox}>
        <RoundButton />
        <RoundButton direction={'right'}/>
      </div>
    </div>
  )
}