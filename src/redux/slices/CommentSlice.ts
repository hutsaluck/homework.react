import {IComment} from "../../models/IComment.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type CommentSliceType = {
    comments: IComment[],
}
const initUserSliceState: CommentSliceType = {comments: []};

const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI) => {
    //TODO: try
    const comments = await getAll<IComment[]>('/comments')
    return thunkAPI.fulfillWithValue(comments)
})
export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>) => {
        state.comments = action.payload
    })
})

export const commentActions = {...commentSlice.actions, loadComments}
