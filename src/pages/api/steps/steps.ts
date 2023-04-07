const getResponseData = (res: any) => {
  if (res.ok) {
    return res.json().then(j => Promise.resolve(j));
  } else {
    return Promise.reject(`${res.status}`);
  }
}

export const getStepsInfo = async () => {
  try {
    return await fetch('http://localhost:3000/steps', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
    }).then(res => getResponseData(res))

  } catch (error) {
    console.log(error);
  }
}

export const setStep = async (step: string) => {
  try {
    return await fetch('http://localhost:3000/steps', {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        currentStep: step
      })
    }).then(res => getResponseData(res))

  } catch (error) {
    console.log(error);
  }
}