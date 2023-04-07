export const userInfoFieldsMap = [
  {
    fieldName: "lastName",
    type: "string",
    placeholder: "Фамилия",
    isMasked: false,
    registerOptions: {
      required: "Обязательно заполните это поле",
      pattern: {
        value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/,
        message: "Вводите фамилию одним словом или через дефис. Не используйте цифры и специальные символы"
      },
    },
    id: "1"
  },
  {
    fieldName: "firstName",
    type: "string",
    placeholder: "Имя",
    isMasked: false,
    registerOptions: {
      required: "Обязательно заполните это поле",
    },
    id: "2"
  },
  {
    fieldName: "birthday",
    type: "string",
    placeholder: "Дата рождения",
    isMasked: true,
    id: "3",
    registerOptions: {
      required: "Пожалуйста заполните поле",
    },
  },
  {
    fieldName: "email",
    type: "email",
    placeholder: "Email",
    isMasked: false,
    registerOptions: {
      required: "Пожалуйста заполните поле",
      pattern: {
        value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        message: "Введите корректный email"
      }
    },
    id: "4"
  },
 {
    fieldName: "password",
    type: "password",
    placeholder: "Придумайте пароль",
    isMasked: false,
    registerOptions: {
      required: "Пожалуйста заполните поле",
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
        message: "Пароль должен содержать 6 символов, иметь строчную и заглавную букву, одну цифру"
      }
      },
    id: "5"
  },
{
    fieldName: "repeatPassword",
    type: "password",
    placeholder: "Повторите пароль",
    isMasked: false,
    registerOptions: {
      required: "Пожалуйста заполните поле",
    },
    id: "6"
  }
]

export const specialInputsInfo = {
  phoneNumber: {
    fieldName: "phoneNumber",
    type: "tel",
    placeholder: "Номер телефона",
    isMasked: true,
    registerOptions: {
      pattern: {
        value: /(\+375)\s?\(?\d\d\)?\s?(\d{3})[ ](\d{2})[ ](\d{2})$/u,
        message: 'Введите номер телефона в формате 375(XX)XXX XX XX'
      },
      required: 'Пожалуйста заполните поле'
    }
  },
  filledSms: {
    fieldName: "filledSms",
    type: "string",
    placeholder: "Введите код из SMS",
    isMasked: true,
    registerOptions: {
      required: 'Пожалуйста заполните поле',
    }
  }
}

export const info = {
  0: {
    "buttonText": "Получить код по SMS"
  },
  1: {
    "buttonText": "Далее"
  },
  2: {
    "buttonText": "Далее"
  },
  3: {
    "buttonText": "Отлично"
  }
}

export const initState = {
  phoneNumber: '',
  filledSms: '',
  firstName: '',
  lastName: '',
  email: '',
  birthday: '',
  password: '',
  repeatPassword: '',
  checkbox: false
}