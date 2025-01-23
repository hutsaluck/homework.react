import {IUserResponseModel} from "../models/IUserResponseModel.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const userService = {
    getAllUsers: async (): Promise<IUserResponseModel> => {
        return await fetch(`${baseUrl}/users`)
            .then(res => res.json())
    },
    getAllUsersWithPagination: async (page: number = 1): Promise<IUserResponseModel> => {
        const limit: number = 30
        const skip: number = limit * page - limit
        return await fetch(`${baseUrl}/users?skip=${skip}`)
            .then(res => res.json())
    }
}