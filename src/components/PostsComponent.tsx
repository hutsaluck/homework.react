import {useEffect, useState} from "react";
import {IPost} from "../models/IPost.ts";
import {PostComponent} from "./PostComponent.tsx";
import {useSearchParams} from "react-router";
import {PaginationComponent} from "./PaginationComponent.tsx";

interface PostsComponentProps {
    posts: IPost[]
}

export const PostsComponent = ({posts}: PostsComponentProps) => {
    const [searchParams] = useSearchParams({page: '1'})
    const [postsPage, setPostsPage] = useState<IPost[]>([])
    const [totalPages, setTotalPages] = useState<number>(1)

    useEffect(() => {
        const limit = 10
        const page: number = Number(searchParams.get('page') || 1)
        const skip: number = limit * page - limit
        setPostsPage(posts.slice(skip, skip + limit))

        const total = posts.length
        setTotalPages(total / limit)
    }, [searchParams, posts])

    return (
        <>
            <div className="grid grid-cols-5 gap-5 justify-center items-start mx-5">
                {postsPage.map((post: IPost) => <PostComponent key={post.id} post={post}/>)}
            </div>
            <PaginationComponent totalPages={Math.ceil(totalPages)}/>
        </>
    );
};