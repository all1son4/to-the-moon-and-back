const getResponseData = (res: any) => {
  if (res.ok) {
    return res.json().then(j => Promise.resolve(j));
  } else {
    return Promise.reject(`${res.status}`);
  }
}

interface IDataProps {
  phoneNumber: string
  filledSms: string
  firstName: string,
  lastName: string
  email: string
  birthday: string | boolean
  password: string,
}

export const setUserInfo = async (data: IDataProps) => {
  try {
    return await fetch('http://localhost:3000/userInfo', {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        phoneNumber: data.phoneNumber.replace('(', '').replace(')', '').split(' ').join('').slice(1,),
        filledSms: data.filledSms.replace(/ /g,''),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        birthday: data.birthday,
        password: data.password,
      }),
    }).then(res => getResponseData(res))

  } catch (error) {
    console.log(error);
  }
}
