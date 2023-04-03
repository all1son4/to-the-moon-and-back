import React, {FC} from "react";

import { IHallInfoProps } from "./hallInfo.types";

import styles from './hallInfo.module.scss'

export const HallInfo: FC<IHallInfoProps> = ({title, description, pos}) => {

  const gridStyles = [styles.hallInfo, styles[pos]].join(' ')

  return (
    <div className={gridStyles}>
      <div className={styles.gradient}/>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default HallInfo