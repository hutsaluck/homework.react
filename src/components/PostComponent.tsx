import {IPost} from "../models/IPost.ts";

interface PostComponentProps {
    post?: IPost
}

export const PostComponent = ({post}: PostComponentProps) => {
    return (
        <div>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    );
};