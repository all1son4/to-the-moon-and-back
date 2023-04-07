export interface ICustomInputProps {
  type: string
  placeholder?: string
  value: string | number
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
  name: string
  state: boolean
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
  onFocus: () => void
  isMasked: boolean
}