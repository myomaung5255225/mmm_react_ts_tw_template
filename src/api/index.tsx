import axios from "axios";
import { pageData } from "../constants";

export const API = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? pageData.API.prod : pageData.API.dev
})

API.interceptors.request.use((config) => {
    config.headers['Authorization'] = localStorage.getItem('access_token')
    return config;
})