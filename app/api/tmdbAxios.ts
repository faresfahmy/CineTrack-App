import axios from "axios";
import { APIURL } from "../constants/constants";
import {setupCache} from "axios-cache-interceptor"
const axiosInstance= axios.create({
    baseURL:APIURL,
    headers:{
        Accept:"application/json",
        Authorization:`Bearer ${process.env.NEXT_PUBLIC_TOKEN_AUTH!}`
    },
    params:{
        language:"en-US"
    },
})
const tmdbApi = setupCache(axiosInstance,{
    ttl:1000 * 60 * 5
})

export default tmdbApi