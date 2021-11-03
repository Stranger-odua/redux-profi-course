import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

/** асинхронный запрос без createAsyncThunk*/
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await  axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`)
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e: any)                                                                                               { /** type any !!!!*/
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//
//     }
// }

/** асинхронный запрос с createAsyncThunk*/
export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить посты')
        }
    }
)


















