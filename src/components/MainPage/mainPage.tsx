import React from "react";
import {Introduce} from "../Introduce/introduce";
import styles from "./mainPage.module.scss"
import {InfoBox} from "../InfoBox/infoBox";
import {info} from '../../utlis/info'
import Image from 'next/image'
import {HallCard} from "../HallCard/hallCard";
import {RoundButton} from "../RoundButton/roundButton";
import {HallInfo} from "../HallInfo/hallInfo";
import {Gallery} from "../Gallary/gallery";
import {Summary} from "../Summary/summary";

export const MainPage = () => {
  return (
    <div className={styles.main}>
      <Image src={'/background-mooon-1.svg'} alt={'background-moon-1'} className={styles.backgroundOne}/>
      <Image src={'/background-mooon-2.svg'} alt={'background-moon-2'} className={styles.backgroundTwo}/>
      <Image src={'/background-mooon-3.svg'} alt={'background-moon-3'} className={styles.backgroundThree}/>
      <Image src={'/background-mooon-4.svg'} alt={'background-moon-4'} className={styles.backgroundFour}/>
      <Introduce/>
      <div className={'container'}>
        <div className={styles.contentContainer}>
          <section>
            <h2 className={[styles.title, styles.titleFirst].join(' ')}>Добро пожаловать в мир удивительных открытий!</h2>
            <InfoBox text={info.infoBlock.hall.text} imageUrl={'/hall.jpeg'}/>
          </section>
          <section>
            <h2 className={styles.title}>Наши кинозалы</h2>
            <div className={styles.hallBox}>
             <HallCard name={'Зал Premiere'} hallUrl={'/premiere.jpeg'}/>
             <HallCard name={'Зал Vegas'} hallUrl={'/vegas.jpeg'}/>
             <HallCard name={'Зал VIP 6'} hallUrl={'/vip6.jpeg'}/>
             <HallCard name={'Зал VIP 7'} hallUrl={'/vip7.jpeg'}/>
            </div>
            <div className={styles.buttons}>
              <RoundButton/>
              <RoundButton direction={'right'}/>
            </div>
          </section>
          <section>
            <div className={styles.hallGradation}>
              <HallInfo title={info.halls.premiere.title} description={info.halls.premiere.description}/>
              <HallInfo title={info.halls.vegas.title} description={info.halls.vegas.description}/>
              <HallInfo title={info.halls.vip.title} description={info.halls.vip.description}/>
            </div>
            <div className={styles.buttonDown}>
              <RoundButton amount={2}/>
            </div>
          </section>
          <section>
            <h2 className={styles.title}>Полное погружение</h2>
            <InfoBox text={info.infoBlock.submerge.text} imageUrl={'/sound.jpeg'} type={'reverse'}/>
          </section>
          <section>
            <h2 className={styles.title}>Место встречи до и после сеанса</h2>
            <InfoBox text={info.infoBlock.place.text} imageUrl={'/snack.jpeg'} type={'reverse'}/>
          </section>
          <section>
            <h2 className={styles.title}>Кофейня Buffet</h2>
            <InfoBox text={info.infoBlock.coffeeShop.text} imageUrl={'/buffet.jpeg'}/>
          </section>
          <section>
            <h2 className={styles.title}>Отдых с комфортом!</h2>
            <InfoBox text={info.infoBlock.rest.text} imageUrl={'/rest.jpeg'} type={'reverse'}/>
          </section>
          <section>
            <h2 className={styles.title}>С вниманием к запросам каждого</h2>
            <InfoBox text={info.infoBlock.attention.text} imageUrl={'/attention.jpeg'} type={'reverse'}/>
          </section>
          <Gallery />
        </div>
      </div>
      <Summary />
    </div>
  )
}