import {ITodoResponse} from "../models/ITodoResponse.ts";

const url = import.meta.env.VITE_API_URL

export const getAllTodos = async ():Promise<ITodoResponse> => {
    const todosResposeObject = await fetch(url + '/todos')
        .then(res => res.json())


    return todosResposeObject
}