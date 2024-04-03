import axios from 'axios'

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
})

apiClient.interceptors.request.use((request) => {
  request.headers.Authorization =  process.env.REACT_APP_ACCESS_TOKEN_KEY
  return request
})

apiClient.interceptors.response.use(
  (results) => {
    // console.log('results', results);
    return results.data
  },
  (error) => {
    // console.log('error', error.response);

    return Promise.reject(error)
  },
)

export default apiClient
