import axios from "axios";
import {ICar} from "../models/ICar.ts";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {'Content-Type': 'application/json'}
})

export const getCars = async (): Promise<ICar[]> => {
    const axiosResponse = await axiosInstance.get<ICar[]>(`/cars`)
    return axiosResponse.data
}

export const getCarsWithPagination = async (page: number): Promise<ICar[]> => {
    const limit = 30
    const skip: number = limit * page - limit
    const axiosResponse = await axiosInstance.get<ICar[]>(`/cars`)
    return  axiosResponse.data.reverse().slice(skip, skip + limit)
}

export const addCar = async (car: ICar): Promise<void> => {
    await axiosInstance.post<ICar>(`/cars`, car)
}

