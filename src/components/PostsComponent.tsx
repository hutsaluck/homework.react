import {useEffect, useState} from "react";
import {IPost} from "../models/IPost.ts";
import {IBaseResponseModel} from "../models/IBaseResponseModel.ts";
import {getAll} from "../services/general.api.service.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getAll<IBaseResponseModel & {posts: IPost[]}>('/posts')
        .then(({posts}) => setPosts(posts))
    })
    return (
        <div>
            {
                posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};