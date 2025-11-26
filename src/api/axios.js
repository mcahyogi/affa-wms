import axios from 'axios'


const instance = axios.create({
baseURL: import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com',
})


export default instance