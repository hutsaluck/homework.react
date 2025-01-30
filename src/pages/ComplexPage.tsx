import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {commentActions} from "../redux/slices/CommentSlice.ts";
import {postActions} from "../redux/slices/PostSlice.ts";
import {userActions} from "../redux/slices/UserSlice.ts";
import {UsersComponent} from "../components/UsersComponent.tsx";
import {PostsComponent} from "../components/PostsComponent.tsx";
import {CommentsComponent} from "../components/CommentsComponent.tsx";

export const ComplexPage = () => {
    const dispatch = useAppDispatch()
    const {
        commentStoreSlice: {comments},
        userStoreSlice: {users},
        postStoreSlice: {posts}
    } = useAppSelector((state) => state)

    useEffect(() => {
        if (!users.length) {
            dispatch(userActions.loadUsers())
        }
        if (!posts.length) {
            dispatch(postActions.loadPosts())
        }
        if (!comments.length) {
            dispatch(commentActions.loadComments())
        }
    }, [])

    return (
        <>
            <UsersComponent users={users}/>
            <PostsComponent posts={posts}/>
            <CommentsComponent comments={comments}/>
        </>
    );
};