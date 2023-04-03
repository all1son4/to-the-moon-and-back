import {makeAutoObservable, toJS} from "mobx";

class RegisterInfo {

  data = {
    phone: '',
    smsCode: '',
    firstName: '',
    lastName: '',
    email: '',
    birthday: '',
    password: '',
    repeatPassword: ''
  }

  phone

  constructor() {
    makeAutoObservable(this)
  }

  setData(e) {
    const data = toJS(this.data)
    const {name, value} = e
    this.data = {
      ...data,
      [name]: value
    }
  }

  setPhone(e) {
    this.phone = e.target.value
  }
}

export default new RegisterInfo()