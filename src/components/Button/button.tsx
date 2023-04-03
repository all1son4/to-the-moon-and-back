import React, {FC} from "react";
import styles from "./button.module.scss"
import {ButtonArrowIcon} from "../../icons";

export const Button = ({buttonText, type = 'button', onClick}) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
    >
      {buttonText}
      <div className={styles.iconWrapper}>
        <ButtonArrowIcon />
      </div>
    </button>
  )
}

export default Button