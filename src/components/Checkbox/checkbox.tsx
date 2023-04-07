import styles from "./checkbox.module.scss";
import React, {FC} from "react";
import CheckBoxIcon from "../../icons/CheckBoxIcon";
import {ICHeckboxProps} from "./checkbox.types";

export const Checkbox: FC<ICHeckboxProps> = ({checked, onChange, placeholder, errorMessage = '', register}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="checkbox"
            checked={checked}
            {...register}
            onChange={onChange}
          />
          <div className={styles.mark}>
            <CheckBoxIcon fill={checked ? '#5966F0' : '#595959'}/>
          </div>
        </label>
        {placeholder}
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  )
}

export default Checkbox