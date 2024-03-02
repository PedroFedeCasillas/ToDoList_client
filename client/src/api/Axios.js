import axios from "axios";

const URL_BACK = import.meta.env.VITE_LOCALHOSTBACK;
// const URLBACK = "http://localhost:4000"
 
const instance = axios.create({
    baseURL: `${URL_BACK}/api`,
    withCredentials: true
})

export default instance;