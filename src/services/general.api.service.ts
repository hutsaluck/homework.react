import {getPosts} from "./posts.api.service.ts";
import {IPost} from "../models/IPost.ts";
import {IUser} from "../models/IUser.ts";

const base_url = import.meta.env.VITE_BASE_URL;

export const getAll = async <T,>(endpoint:string):Promise<T> => {
    return await fetch(`${base_url}${endpoint}`).then(res => res.json())
}

const posts = getAll<IPost[]>('/posts')
const users = getAll<IUser[]>('/users')