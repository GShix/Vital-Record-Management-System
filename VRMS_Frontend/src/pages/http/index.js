import axios from "axios";

const API = axios.create({
    // baseURL:"http://localhost:9000/api",
    baseURL:"https://v2-vrms.vercel.app/api",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
    }
})

export default API;