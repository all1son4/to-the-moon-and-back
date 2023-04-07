const getResponseData = (res: any) => {
  if (res.ok) {
    return res.json().then(j => Promise.resolve(j));
  } else {
    return Promise.reject(`${res.status}`);
  }
}

export const setDate = async (date: any) => {
  try {
    return await fetch('http://localhost:3000/timerDate', {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify( {
        date: date
      })
    }).then(res => getResponseData(res))

  } catch (error) {
    console.log(error);
  }
}

export const getDate = async () => {
  try {
    return await fetch('http://localhost:3000/timerDate', {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
    }).then(res => getResponseData(res))

  } catch (error) {
    console.log(error);
  }
}
