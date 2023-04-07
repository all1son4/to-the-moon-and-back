import {ReactNode} from "react";

export interface ICHeckboxProps {
  checked: boolean
  onChange: () => {
    phoneNumber: string
    filledSms: string
    firstName: string
    lastName: string
    email: string
    birthday: string | number
    password: string,
    repeatPassword: string
    checkbox: boolean
  }
  placeholder?: string | ReactNode
  errorMessage: string
  register: {
    name: string
    required?: string | boolean
    validate?: () => boolean | string
    pattern?: {
      value: string
      message: string
    }
  }
}