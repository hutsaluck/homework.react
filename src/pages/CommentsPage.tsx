import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {commentActions} from "../redux/slices/CommentSlice.ts";
import {IComment} from "../models/IComment.ts";
import {CommentsComponent} from "../components/CommentsComponent.tsx";

export const CommentsPage = () => {
    const dispatch = useAppDispatch()
    const comments: IComment[] = useAppSelector((state) => state.commentStoreSlice.comments)

    useEffect(() => {
        dispatch(commentActions.loadComments())
    }, [])

    return (
        <>
            <CommentsComponent comments={comments}/>
        </>
    );
};