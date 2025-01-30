import {useEffect, useState} from "react";
import {IComment} from "../models/IComment.ts";
import {CommentComponent} from "./CommentComponent.tsx";
import {useSearchParams} from "react-router";
import {PaginationComponent} from "./PaginationComponent.tsx";

interface CommentsComponentProps {
    comments: IComment[]
}

export const CommentsComponent = ({comments}: CommentsComponentProps) => {
    const [searchParams] = useSearchParams({page: '1'})
    const [commentsPage, setCommentsPage] = useState<IComment[]>([])
    const [totalPages, setTotalPages] = useState<number>(1)

    useEffect(() => {
        const limit = 10
        const page: number = Number(searchParams.get('page') || 1)
        const skip: number = limit * page - limit
        setCommentsPage(comments.slice(skip, skip + limit))

        const total = comments.length
        setTotalPages(total / limit)
    }, [searchParams, comments])

    return (
        <>
            <div className="grid grid-cols-5 gap-5 justify-center items-start mx-5">
                {commentsPage.map((comment: IComment) => <CommentComponent key={comment.id} comment={comment}/>)}
            </div>
            <PaginationComponent totalPages={Math.ceil(totalPages)}/>
        </>
    );
};