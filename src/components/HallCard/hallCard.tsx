import React, {FC} from "react";
import Image from 'next/image'
import styles from './hallCard.module.scss'

export const HallCard: FC<IHallCardProps> = ({name, hallUrl}) => {
  return (
    <div className={styles.hallCard}>
      <Image src={hallUrl} alt={'hall'} className={styles.image} width={331} height={205}/>
      <p className={styles.name}>{name}</p>
    </div>
  )
}

export default HallCard