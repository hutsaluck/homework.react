import {ITodo} from "../models/ITodo.ts";

const url = import.meta.env.VITE_API_URL

export const getAllTodos = async ():Promise<ITodo[]> => {
    const todosResposeObject = await fetch(url + '/todos')
        .then(res => res.json())


    return todosResposeObject
}