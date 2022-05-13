import Axios, { AxiosInstance } from 'axios'

const axios: AxiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

export default axios
