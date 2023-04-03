import React from "react";
import {Introduce} from "../Introduce/introduce";
import styles from "./TrinitiPage.module.scss"
import {InfoBox} from "../InfoBox/infoBox";
import {info} from '../../utlis/info'
import {backgroundFragments} from "../../utlis/backgroundFragments";
import Image from 'next/image'
import {HallCard} from "../HallCard/hallCard";
import {RoundButton} from "../RoundButton/roundButton";
import {HallInfo} from "../HallInfo/hallInfo";
import {Gallery} from "../Gallary/gallery";
import {Summary} from "../Summary/summary";

export const TrinitiPage = () => {
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
        title={'в ТРК Triniti'}
        address={'г. Гродно, ул. Янки Купалы, 87, ТРК Triniti, 3 этаж'}
        cinema={'triniti'}
      />
      <div className={'container'}>
        <div className={styles.contentContainer}>
          <section>
            <h2 className={[styles.title, styles.titleFirst].join(' ')}>Выходите за рамки привычных форматов</h2>
            <InfoBox text={info.triniti.boxes.hall.text} imageUrl={info.triniti.boxes.hall.image}/>
          </section>
          <section>
            <h2 className={styles.title}>Наши кинозалы</h2>
            <div className={styles.hallBox}>
              {info.triniti.cinemas.map((cinema) =>
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
              {info.triniti.halls.map((hall) =>
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
            <h2 className={styles.title}>Уникальный эффект полного погружения</h2>
            <InfoBox text={info.triniti.boxes.submerge.text} imageUrl={info.triniti.boxes.submerge.image} type={'reverse'}/>
          </section>
          <section>
            <h2 className={styles.title}>Вкус во всём
            </h2>
            <InfoBox text={info.triniti.boxes.snack.text} imageUrl={info.triniti.boxes.snack.image}/>
          </section>
          <section>
            <h2 className={styles.title}>Удовольствие начинается здесь</h2>
            <InfoBox text={info.triniti.boxes.interier.text} imageUrl={info.triniti.boxes.interier.image} type={'reverse'}/>
          </section>
          <section>
            <h2 className={styles.title}>Качество во всех проявлениях</h2>
            <InfoBox text={info.triniti.boxes.rooms.text} imageUrl={info.triniti.boxes.rooms.image} />
          </section>
          <Gallery  cinema={'triniti'}/>
        </div>
      </div>
      <Summary cinema={'triniti'} title={'в ТРК Triniti'}/>
    </div>
  )
}