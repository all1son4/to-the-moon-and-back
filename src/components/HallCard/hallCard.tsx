import React, {FC} from "react";
import styles from './hallCard.module.scss'

export const HallCard: FC<IHallCardProps> = ({name, hallUrl}) => {
  return (
    <div className={styles.hallCard}>
      <img src={hallUrl} alt={'hall'} className={styles.image}/>
      <p className={styles.name}>{name}</p>
    </div>
  )
}

export default HallCard