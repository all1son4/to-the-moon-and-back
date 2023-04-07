import React, {useEffect, useState} from "react";
import CustomInput from "../Input/customInput";
import styles from "./authentication.module.scss"
import {SplitterIcon} from "../../icons";
import Button from "../Button/button";
import {observer} from "mobx-react-lite";
import {info, initState, specialInputsInfo, userInfoFieldsMap} from "./authentication.constants";
import Checkbox from "../Checkbox/checkbox";
import {useForm} from "react-hook-form";
import moment from "moment";
import {getStepsInfo, setStep} from "../../pages/api/steps/steps";
import {getDate, setDate} from "../../pages/api/timer/timer";
import {setUserInfo} from "../../pages/api/userInfo/userInfo";
import {getSMS} from "../../pages/api/sms/sms";

export const Authentication = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    clearErrors,
    reset,
    setError
  } = useForm({shouldFocusError: false});

  const [currentStepState, setCurrentStepState] = useState("0")
  const [fieldsData, setFieldsData] = useState(initState)
  const [timer, setTimer] = useState(0)

  const inputOnChange = (event):void => {
    const {name, value} = event.target
    setFieldsData(v => ({...v, [name]: value}))
  }

  const onFocus = (event):void => {
    const {name} = event.target
    clearErrors(name)
  }

  const timeResponseHandler = (res: any):void => {
    if (res) {
      const timerValue = moment(res?.date).diff(moment(), 'seconds')
      setTimer(timerValue)
    }
  }

  const stepHandler = (step: string): void => {
    setStep(step).then((r) => {
      const {currentStep} = r
      setCurrentStepState(currentStep)

      if (step === '1') {
        setTimerDate()
      }
    })
  }

  const setTimerDate = (): void => {
    setDate(moment().add(moment.duration(2, 'minutes')).format()).then(r => {
      timeResponseHandler(r)
    })
  }

  const getTimerDate = (): void => {
    getDate().then((r) => {
      timeResponseHandler(r)
    })
  }

  const buttonHandler = (data: any, event) => {
    event.preventDefault()

    if (isValid) {
      switch (currentStepState) {
        case "0": {
          if (data) {
            setUserInfo(fieldsData).then(() => {
              stepHandler("1")
            })
          }
          reset()
          break
        }
        case "1": {
          getSMS().then((r) => {
            const {smsCode} = r
            if (fieldsData.filledSms.replace(/ /g,'') === smsCode) {
              stepHandler("2")
            } else {
              setError('filledSms', {
                message: "Неверный код"
              })
            }
          })
          reset()
          break
        }
        case "2": {
          setUserInfo(fieldsData).then(() => {
            stepHandler("3")
          })
          reset()
          break
        }
        default: return null
      }
    }
  }

  const additionalRegisterOption = (name, options): object => {
    switch (name) {
      case "repeatPassword": {
        return {...options, validate: value => value === fieldsData.password || "Введенные пароли не совпадают" }
      }
      case "birthday": {
        return {...options}
      }
      default: return options
    }
  }

  useEffect(() => {
    getStepsInfo().then((r) => {
      const {currentStep} = r
      setCurrentStepState(currentStep)
    })
    if (timer === 0) {
      getTimerDate()
    }
  }, [])

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000)
    }
  }, [timer])

  return (
    <div className={'container'}>
      <div className={styles.contentContainer}>
        <form className={styles.form} onSubmit={handleSubmit(buttonHandler)}>
          <h1 className={styles.title}>
            <span className={styles.variant}>Вход</span>
            <SplitterIcon />
            <span className={[styles.variant, styles.variantActive].join(' ')}>Регистрация</span>
          </h1>
          {currentStepState === "0" &&
          <CustomInput
            state={fieldsData.phoneNumber !== ''}
            isMasked={specialInputsInfo.phoneNumber.isMasked}
            placeholder={specialInputsInfo.phoneNumber.placeholder}
            type={specialInputsInfo.phoneNumber.type}
            name={specialInputsInfo.phoneNumber.fieldName}
            value={fieldsData.phoneNumber}
            onChange={inputOnChange}
            onFocus={onFocus}
            errorMessage={errors?.phoneNumber?.message}
            register={register('phoneNumber', specialInputsInfo.phoneNumber.registerOptions)}
          />}
          {currentStepState === "1" &&
          <CustomInput
            state={fieldsData.filledSms !== ''}
            isMasked={specialInputsInfo.filledSms.isMasked}
            placeholder={specialInputsInfo.filledSms.placeholder}
            type={specialInputsInfo.filledSms.type}
            name={specialInputsInfo.filledSms.fieldName}
            value={fieldsData.filledSms}
            onChange={inputOnChange}
            onFocus={onFocus}
            errorMessage={errors?.filledSms?.message}
            register={register('filledSms', specialInputsInfo.filledSms.registerOptions)}
          />}
          {currentStepState === "2" &&
            userInfoFieldsMap.map(field => <CustomInput
                key={field.id}
                isMasked={field.isMasked}
                state={fieldsData[field.fieldName] !== ''}
                placeholder={field.placeholder}
                type={field.type}
                name={field.fieldName}
                value={fieldsData[field.fieldName]}
                onChange={inputOnChange}
                errorMessage={errors[field.fieldName]?.message}
                register={register(`${field.fieldName}`, additionalRegisterOption(field.fieldName, field.registerOptions))}
                onFocus={onFocus}
              />
            )
          }
          {currentStepState === "0" &&
            <div className={styles.privacyBox}>
              <Checkbox
                checked={fieldsData?.checkbox}
                register={register('checkbox', {
                  required: {
                    value: true,
                    message: 'Примите соглашения и документы, чтобы продолжить'
                  }
                })}
                errorMessage={errors?.checkbox?.message}
                onChange={() => {
                  setFieldsData(v => ({...v, checkbox: !v.checkbox}))
                  clearErrors('checkbox')
                }}
                placeholder={<p className={styles.terms}>Я соглашаюсь с <span>политикой в отношении персональных данных</span></p>}
              />
            </div>
          }
          <div className={styles.button}>
            <Button type={'submit'} buttonText={info[currentStepState]?.buttonText}/>
          </div>
          {currentStepState === "1" &&
          <div className={styles.resendBox}>
            {timer > 0
              ? <p className={styles.resendInfo}>Отправить код повторно или изменить номер телефона можно будет через {timer} сек</p>
              : <div className={styles.interactive}>
                <p className={styles.interactiveText} onClick={() => {stepHandler("0")}}>Изменить номер</p>
                <p className={styles.interactiveText} onClick={setTimerDate}>Отправить код повторно</p>
              </div>
            }
          </div>
          }
        </form>
      </div>
    </div>
  );
};

export default observer(Authentication)