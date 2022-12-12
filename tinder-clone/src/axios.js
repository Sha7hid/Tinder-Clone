import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tinder-backend-production.up.railway.app/'
})

export default instance;