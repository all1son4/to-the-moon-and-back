import React from "react";
import Image from "next/image";
import styles from "./gallery.module.scss";

import { RoundButton } from "../RoundButton/roundButton";
import { galleryImages } from "./gallery.constants";

export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <h2 className={styles.title}>Галерея</h2>
      <div className={styles.galleryBox}>
        {galleryImages.map(({ id, src }) => (
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
