const getResponseData = (res: any) => {
  if (res.ok) {
    return res.json().then(j => Promise.resolve(j));
  } else {
    return Promise.reject(`${res.status}`);
  }
}

export const getSMS = async () => {
  try {
    return await fetch('http://localhost:3000/getSms', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
    }).then(res => getResponseData(res))

  } catch (error) {
    console.log(error);
  }
}