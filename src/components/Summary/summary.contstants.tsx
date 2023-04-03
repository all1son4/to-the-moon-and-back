import styles from "./summary.module.scss";
import React from "react";

export const text = {
  danaMall: <div className={styles.info}>
    <p className={styles.addressBlock}>
      ул. Петра Мстиславца, 11, ТРЦ Dana Mall, 3 этаж (г.Минск)
    </p>
    E-mail: <a href={'mailto:info@mooon.by'}>info@mooon.by</a>
    <br/>
    336-90-50 (городской, А1, МТС)
    <br/>
    <span>Вс-Чт с 10:00 до 00:00,</span>
    <br/>
    Пт-Сб с 10:00 до 01:30
  </div>,
  palazzo: <div className={styles.info}>
    <p className={styles.addressBlock}>
      ул.Тимирязева, 74А, ТРЦ Palazzo, 3 этаж (г.Минск)
    </p>
    E-mail: <a href={'mailto:info@mooon.by'}>info@mooon.by</a>
    <br/>
    336-90-50 (городской, А1, МТС)
    <br/>
    <span>Вс-Чт с 10:00 до 00:00,</span>
    <br/>
    Пт-Сб с 10:00 до 01:30
  </div>,
  arenaCity: <div className={styles.info}>
    <p className={styles.addressBlock}>
      пр. Победителей, 84, ТРЦ Arena Сity, 2 этаж (г. Минск)
    </p>
    E-mail: <a href={'mailto:info@silverscreen.by'}>info@silverscreen.by</a>
    <br/>
    336-90-50 (городской, А1, МТС)
    <br/>
    Пн-Вс - 11:00 до 23:00
  </div>,
  triniti: <div className={styles.info}>
    <p className={styles.addressBlock}>
      ул. Янки Купалы, 87, ТРК Triniti, 3 этаж (г. Гродно)
    </p>
    E-mail: <a href={'mailto:info@mooon.by'}>info@mooon.by</a>
    <br/>
    336-90-50 (городской, А1, МТС)
    <br/>
    <span>Вс-Чт с 10:00 до 23:00;</span>
    <br/>
    Пт-Сб с 10:00 до 01:00
  </div>
}
