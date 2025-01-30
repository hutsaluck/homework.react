import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {postActions} from "../redux/slices/PostSlice.ts";
import {PostsComponent} from "../components/PostsComponent.tsx";

export const PostsPage = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector((state) => state.postStoreSlice.posts)

    useEffect(() => {
        dispatch(postActions.loadPosts())
    }, [])

    return (
        <>
            <PostsComponent posts={posts}/>
        </>
    );
};