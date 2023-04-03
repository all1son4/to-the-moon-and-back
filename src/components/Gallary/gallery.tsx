import React, {FC} from "react";
import Image from "next/image";
import styles from "./gallery.module.scss";
import { RoundButton } from "../RoundButton/roundButton";
import {
  arenaCityGallery,
  danaMallGallery,
  palazzoGallery,
  trinitiGallery
} from "./gallery.constants";

import {IGalleryProps} from "./gallery.types";
import HallInfo from "../HallInfo/hallInfo";

export const Gallery: FC<IGalleryProps> = ({cinema}) => {

  const gallery = () => {
    switch (cinema) {
      case 'danaMall': {
        return danaMallGallery
      }
      case 'palazzo': {
        return palazzoGallery
      }
      case 'arenaCity': {
        return arenaCityGallery
      }
      case 'triniti': {
        return trinitiGallery
      }
      default: return []
    }
  }

  return (
    <div className={styles.gallery}>
      <h2 className={styles.title}>Галерея</h2>
      <div className={styles.galleryBox}>
        {gallery().map(({ id, src }) => (
          <Image
            key={id}
            src={src}
            alt={"gallery-image"}
            className={styles.image}
            width={335}
            height={205}
          />
        ))}
      </div>
      <div className={styles.buttonBox}>
        <RoundButton />
        <RoundButton direction={"right"} />
      </div>
    </div>
  );
};

export default Gallery