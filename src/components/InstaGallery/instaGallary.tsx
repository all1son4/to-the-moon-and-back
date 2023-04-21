import React, {useEffect, useState} from "react";
import styles from "./instaGallery.module.scss"
import {CarouselIcon, VideoIcon} from "../../icons";

export const InstaGallery = () => {
  const userToken = 'IGQVJXN1FIVTJWb3JlNWtGRTU4bkJkTGgtWTBjbE12WkZAKUkltcnRRY1Q2V2huVXNmX0JRZAjBULUVXdFZACRHU0aklqS0puNHNJN1gtTGx0WXRQR3h1YXo3RjlUYWN0em14RS1TSnRmdl9aalZACc0dncgZDZD'

  const [instaCards, setInstaCards] = useState([])

  useEffect(() => {
    fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,timestamp,thumbnail_url,permalink,children{fields=id,media_url,permalink}&limit=10&access_token=${userToken}`)
      .then(r => r.json())
      .then(r => setInstaCards(r.data))
  }, [])

  const redirectToPost = (link) => {
    window.open(link)
  }

  const iconVariant = (type) => {
    switch (type) {
      case 'CAROUSEL_ALBUM': {
        return <CarouselIcon/>
      }
      case 'VIDEO': {
        return <VideoIcon />
      }
      default: return <></>
    }
  }

  return (
    <div className={styles.instaGallery}>
      <h2 className={styles.title}>Впечатления</h2>
      {instaCards &&
        <div className={styles.cardBox}>
          {instaCards?.map((item) => {
            return <div className={styles.card} key={item.id}>
              <div className={styles.cardIcon}>{iconVariant(item.media_type)}</div>
              {item.media_type === 'VIDEO'
                ? <video
                  className={styles.cardImage}
                  onClick={() => {redirectToPost(item.permalink)}}
                  poster={item.thumbnail_url}
                  muted
                >
                  <source src={item.media_url} />
                </video>
                : <img
                  onClick={() => {redirectToPost(item.permalink)}}
                  src={item.media_url}
                  alt={'card'}
                  className={styles.cardImage}
                />
              }
            </div>
          })}
        </div>}
      {!instaCards && <p className={styles.errorMessage}>К сожалению Instagram не захотел поделиться с Вами впечталениями</p>}
    </div>
  );
};

export default InstaGallery