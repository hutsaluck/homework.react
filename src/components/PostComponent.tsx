import {IPost} from "../models/IPost.ts";

interface PostComponentProps {
    post: IPost
}

export const PostComponent = ({post}: PostComponentProps) => {
    return (
        <div
            className="my-10 border border-gray-300 rounded-2xl grid justify-center items-center cursor-pointer transition-shadow duration-500 hover:shadow-lg group">
            <div className="p-4">
                <h3 className="text-2xl font-semibold text-center mb-2 max-h-[30px] group-hover:max-h-[200px] overflow-hidden text-ellipsis transition-[max-height] duration-500 ease-in-out">
                    {post.title}
                </h3>
                <p className="text-center max-h-[160px] group-hover:max-h-[500px] overflow-hidden text-ellipsis transition-[max-height] duration-500 ease-in-out">
                    {post.body}
                </p>
            </div>
        </div>
    );
};