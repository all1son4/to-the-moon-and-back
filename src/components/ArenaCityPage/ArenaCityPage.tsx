import React from "react";
import {Introduce} from "../Introduce/introduce";
import styles from "./ArenaCityPage.module.scss"
import {InfoBox} from "../InfoBox/infoBox";
import {info} from '../../utlis/info'
import {backgroundFragments} from "../../utlis/backgroundFragments";
import Image from 'next/image'
import {Gallery} from "../Gallary/gallery";
import {Summary} from "../Summary/summary";
import InstaGallery from "../InstaGallery/instaGallary";

export const ArenaCityPage = () => {
  return (
    <div className={styles.main}>
      {backgroundFragments.map(({id, src, alt, styleName, width, height}) => (
          <Image
            key={id}
            src={src}
            alt={alt}
            className={`background${styleName}`}
            width={width}
            height={height}
          />
        )
      )}
      <Introduce
        title={'в ТРЦ Arena Сitу'}
        address={'г. Минск, ул. пр. Победителей, 84, ТРЦ Arena Сity, 2 этаж'}
        cinema={'arenaCity'}
      />
      <div className={'container'}>
        <div className={styles.contentContainer}>
          <section>
            <h2 className={[styles.title, styles.titleFirst].join(' ')}>Удовольствие с комфортом</h2>
            <InfoBox text={info.arenaCity.boxes.hall.text} imageUrl={info.arenaCity.boxes.hall.image} />
          </section>
          <section>
            <h2 className={styles.title}>Полное погружение в происходящее</h2>
            <InfoBox text={info.arenaCity.boxes.submerge.text} imageUrl={info.arenaCity.boxes.submerge.image} type={'reverse'}/>
          </section>
          <section>
            <h2 className={styles.title}>Делаем жизнь вкуснее</h2>
            <InfoBox text={info.arenaCity.boxes.yammy.text} imageUrl={info.arenaCity.boxes.yammy.image}/>
          </section>
          <section>
            <h2 className={styles.title}>Будьте собой среди своих</h2>
            <InfoBox text={info.arenaCity.boxes.mate.text} imageUrl={info.arenaCity.boxes.mate.image} type={'reverse'}/>
          </section>
          <Gallery  cinema={'arenaCity'}/>
          <InstaGallery />
        </div>
      </div>
      <Summary cinema={'arenaCity'} title={'в ТРЦ Arena Сitу'}/>
    </div>
  )
}