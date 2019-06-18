import axios from 'axios'

export const request = options => {
  return axios({
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'same-origin',
    mode: 'no-cors',
    ...options,
  })
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(`asd: request -> error`, error)
      return error
    })
}
