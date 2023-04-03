import React from "react";
import {Introduce} from "../Introduce/introduce";
import styles from "./PalazzoPage.module.scss"
import {InfoBox} from "../InfoBox/infoBox";
import {info} from '../../utlis/info'
import {backgroundFragments} from "../../utlis/backgroundFragments";
import Image from 'next/image'
import {HallCard} from "../HallCard/hallCard";
import {RoundButton} from "../RoundButton/roundButton";
import {HallInfo} from "../HallInfo/hallInfo";
import {Gallery} from "../Gallary/gallery";
import {Summary} from "../Summary/summary";

export const PalazzoPage = () => {
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
        title={'в ТРЦ Palazzo'}
        address={'г. Минск, ул.Тимирязева, 74А, ТРЦ Palazzo, 3 этаж'}
        cinema={'palazzo'}
      />
      <div className={'container'}>
        <div className={styles.contentContainer}>
          <section>
            <h2 className={[styles.title, styles.titleFirst].join(' ')}>Больше, чем поход в кино</h2>
            <InfoBox text={info.palazzo.boxes.hall.text} imageUrl={info.palazzo.boxes.hall.image} />
          </section>
          <section>
            <h2 className={styles.title}>Наши кинозалы</h2>
            <div className={styles.hallBox}>
              {info.palazzo.cinemas.map((cinema) =>
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
              {info.palazzo.halls.map((hall) =>
                <HallInfo
                  pos={hall.pos}
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
            <h2 className={styles.title}>Наслаждайтесь каждым мгновением</h2>
            <InfoBox text={info.palazzo.boxes.moment.text} imageUrl={info.palazzo.boxes.moment.image} type={'reverse'}/>
          </section>
          <section>
            <h2 className={styles.title}>Зарядитесь положительными эмоциями</h2>
            <InfoBox text={info.palazzo.boxes.emotions.text} imageUrl={info.palazzo.boxes.emotions.image}/>
          </section>
          <section>
            <h2 className={styles.title}>Проект mooon KIDS</h2>
            <InfoBox text={info.palazzo.boxes.kids.text} imageUrl={info.palazzo.boxes.kids.image} type={'reverse'}/>
          </section>
          <section>
            <h2 className={styles.title}>Media room: уникальный проект для комфортного отдыха</h2>
            <InfoBox text={info.palazzo.boxes.mediaRoom.text} imageUrl={info.palazzo.boxes.mediaRoom.image}/>
          </section>
          <section>
            <h2 className={styles.title}>mooon space: место для приятных встреч</h2>
            <InfoBox text={info.palazzo.boxes.space.text} imageUrl={info.palazzo.boxes.space.image} type={'reverse'}/>
          </section>
          <section>
            <h2 className={styles.title}>Все останутся довольны</h2>
            <InfoBox text={info.palazzo.boxes.enjoy.text} imageUrl={info.palazzo.boxes.enjoy.image} />
          </section>
          <Gallery  cinema={'palazzo'}/>
        </div>
      </div>
      <Summary cinema={'palazzo'} title={'в ТРЦ Palazzo'}/>
    </div>
  )
}