import React, {FC} from "react";
import styles from "./customInput.module.scss"
import InputMask from 'react-input-mask';
import {ICustomInputProps} from "./customInput.types";

export const CustomInput: FC<ICustomInputProps> = ({type, placeholder, value, onChange, name, state, errorMessage = '', register, onFocus, isMasked}) => {

  const currentPlaceholder = state ? [styles.placeholder, styles.notEmpty].join(' ') : styles.placeholder

  const currentInput = errorMessage ? [styles.input, styles.error].join(' ') : styles.input

  const mask = (name): string | null => {
    switch (name) {
      case 'phoneNumber': {
        return '+999(99) 999 99 99'
      }
      case 'birthday': {
        return '99.99.9999'
      }
      case 'filledSms': {
        return '999 999'
      }
      default: return null
    }
  }

  return (
    <div className={styles.inputWrapper}>
      {isMasked
        ? <InputMask
          mask={mask(name)}
          maskChar={null}
          name={name}
          type={type}
          value={value}
          className={currentInput}
          autoComplete={'off'}
          {...register}
          onChange={onChange}
          onFocus={onFocus}
        />
        : <input
          name={name}
          type={type}
          value={value}
          className={currentInput}
          autoComplete={'off'}
          {...register}
          onChange={onChange}
          onFocus={onFocus}
        />
      }
      <p className={currentPlaceholder}>{placeholder}</p>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  )
}

export default CustomInput