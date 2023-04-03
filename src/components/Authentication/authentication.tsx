import React, {useEffect, useRef, useState} from "react";
import CustomInput from "../Input/customInput";
import styles from "./authentication.module.scss"
import {SplitterIcon} from "../../icons";
import Button from "../Button/button";
import registerInfo from "../../store/registration";
import {observer} from "mobx-react-lite";
import backendImitation from "../../utlis/backendImitation.json"
import {toJS} from "mobx";
import {userInfoFields} from "./authentication.constants";
import {getSmsCode} from "../../pages/api/authentication";

export const Authentication = () => {

  const form = useRef()
  const store = toJS(registerInfo)

  const [fieldsData, setFieldsData] = useState({
    phoneNumber: '',
    smsCode: '',
    firstName: '',
    lastName: '',
    email: '',
    birthday: '',
    password: '',
    repeatPassword: ''
  })


  const inputOnChange = (event):void => {
    const {name, value} = event.target
    setFieldsData(v => ({...v, [name]: value}))
  }

  const buttonHandler = () => {
    switch (backendImitation.steps.currentStep) {
      case "0": {
          getSmsCode().then(r => console.log(r))
        break
      }
      case "1": {

        break
      }
      case "2": {

        break
      }
      default: return null

    }
  }


  return (
    <div className={'container'}>
      <div className={styles.contentContainer}>
        <form className={styles.form} ref={form}>
          <h1 className={styles.title}>
            <span className={styles.variant}>Вход</span>
            <SplitterIcon />
            <span className={[styles.variant, styles.variantActive].join(' ')}>Регистрация</span>
          </h1>
          {backendImitation.steps.currentStep === "0" &&
          <CustomInput
            state={fieldsData.phoneNumber !== ''}
            placeholder={'Номер телефона'}
            type={'tel'}
            name={'phoneNumber'}
            value={fieldsData.phoneNumber}
            onChange={inputOnChange}
          />}
          {backendImitation.steps.currentStep === "1" &&
          <CustomInput
            state={fieldsData.smsCode !== ''}
            placeholder={'Введите код из SMS'}
            type={'number'}
            name={'smsCode'}
            value={fieldsData.smsCode}
            onChange={inputOnChange}
          />}
          {backendImitation.steps.currentStep === "2" &&
            userInfoFields.map(field => <CustomInput
              key={field.id}
              state={fieldsData[field.fieldName] !== ''}
              placeholder={field.placeholder}
              type={field.type}
              name={field.fieldName}
              value={fieldsData[field.fieldName]}
              onChange={inputOnChange}
            />)
          }
          <div className={styles.button}>
            <Button buttonText={backendImitation.steps.info[backendImitation.steps.currentStep].buttonText} onClick={buttonHandler}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default observer(Authentication)