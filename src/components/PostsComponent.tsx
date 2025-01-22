import {useEffect, useState} from "react";
import {IPost} from "../models/IPost.ts";
import {IBaseResponseModel} from "../models/IBaseResponseModel.ts";
import {getAll} from "../services/general.api.service.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getAll<IBaseResponseModel & { posts: IPost[] }>('/posts')
            .then(({posts}) => setPosts(posts))
    }, [])

    return (
        <div className="grid grid-cols-5 gap-5 justify-center items-start mx-5">
            {
                posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};