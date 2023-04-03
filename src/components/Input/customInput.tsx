import React, {FC} from "react";
import styles from "./customInput.module.scss"

export const CustomInput = ({type, placeholder, value, onChange, name, state, errorMessage}) => {

  const currentStyle = state ? [styles.placeholder, styles.notEmpty].join(' ') : styles.placeholder

  return (
    <div className={styles.inputWrapper}>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
        autoComplete={'off'}
      />
      <p className={currentStyle}>{placeholder}</p>
      <p className={styles.errorMessage}>{errorMessage}</p>
    </div>
  )
}

export default CustomInput