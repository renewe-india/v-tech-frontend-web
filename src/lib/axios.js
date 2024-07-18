import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'X-Tenant': process.env.NEXT_PUBLIC_APP_BACKEND_ID,
    },
    withCredentials: true,
    withXSRFToken: true,
})
export default axios
