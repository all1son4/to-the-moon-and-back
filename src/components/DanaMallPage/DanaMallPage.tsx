import React from "react";
import {Introduce} from "../Introduce/introduce";
import styles from "./DanaMallPage.module.scss"
import {InfoBox} from "../InfoBox/infoBox";
import {info} from '../../utlis/info'
import {backgroundFragments} from "../../utlis/backgroundFragments";
import Image from 'next/image'
import {HallCard} from "../HallCard/hallCard";
import {RoundButton} from "../RoundButton/roundButton";
import {HallInfo} from "../HallInfo/hallInfo";
import {Gallery} from "../Gallary/gallery";
import {Summary} from "../Summary/summary";

export const DanaMallPage = () => {
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
        title={'в ТРЦ Dana Mall'}
        address={'г. Минск, ул.Петра Мстиславца, 11, ТРЦ Dana Mall, 3 этаж'}
        cinema={'danaMall'}
      />
      <div className={'container'}>
        <div className={styles.contentContainer}>
          <section>
            <h2 className={[styles.title, styles.titleFirst].join(' ')}>Добро пожаловать в мир удивительных открытий!</h2>
            <InfoBox text={info.danaMall.boxes.hall.text} imageUrl={'/danaHall.png'}/>
          </section>
          <section>
            <h2 className={styles.title}>Наши кинозалы</h2>
            <div className={styles.hallBox}>
              {info.danaMall.cinemas.map((cinema) =>
                <HallCard
                  key={cinema.id}
                  name={cinema.name}
                  hallUrl={cinema.url}
                />)}
            </div>
            <div className={styles.buttons}>
              <RoundButton/>
              <RoundButton direction={'right'}/>
            </div>
          </section>
          <section>
            <div className={styles.hallGradation}>
              {info.danaMall.halls.map((hall) =>
                <HallInfo
                  key={hall.id}
                  title={hall.title}
                  description={hall.description}/>
              )}
            </div>
            <div className={styles.buttonDown}>
              <RoundButton amount={2}/>
            </div>
          </section>
          <section>
            <h2 className={styles.title}>Полное погружение</h2>
            <InfoBox text={info.danaMall.boxes.submerge.text} imageUrl={'/sound.jpeg'} type={'reverse'}/>
          </section>
          <section>
            <h2 className={styles.title}>Место встречи до и после сеанса</h2>
            <InfoBox text={info.danaMall.boxes.place.text} imageUrl={'/snack.jpeg'} type={'reverse'}/>
          </section>
          <section>
            <h2 className={styles.title}>Кофейня Buffet</h2>
            <InfoBox text={info.danaMall.boxes.coffeeShop.text} imageUrl={'/buffet.png'}/>
          </section>
          <section>
            <h2 className={styles.title}>Отдых с комфортом!</h2>
            <InfoBox text={info.danaMall.boxes.rest.text} imageUrl={'/rest.png'} type={'reverse'}/>
          </section>
          <section>
            <h2 className={styles.title}>С вниманием к запросам каждого</h2>
            <InfoBox text={info.danaMall.boxes.attention.text} imageUrl={'/attention.jpeg'} type={'reverse'}/>
          </section>
          <Gallery  cinema={'danaMall'}/>
        </div>
      </div>
      <Summary cinema={'danaMall'} title={'в ТРЦ Dana Mall'}/>
    </div>
  )
}