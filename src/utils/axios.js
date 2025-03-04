import axios from "axios"
export const api = axios.create({
    baseURL: "http://18.141.17.233:3000"
})