import axios from "axios"
import {Dispatch} from "redux"
import { UserActionType } from "../../types/user";

export const fetchUsers = () => async(dispatch:Dispatch) => {
    
    dispatch({type: UserActionType.USER_LIST_REQUEST})

    try {
        const { data } = await axios.get('/api/user');
        console.log(data)
        dispatch({
            type: UserActionType.USER_LIST_SUCCESS,
            payload: data.users
        })
    } catch (error:any) {
        dispatch({
            type: UserActionType.USER_LIST_FAIL,
            payload: error.message
        })
    }
    
}

export const addUser = (user: any) => async(dispatch: Dispatch) => {
    dispatch({ type: UserActionType.CREATE_USER_REQUEST });
    try {
        const { data } = await axios.post('/api/user', user);
        console.log("data user",data.user)
        dispatch({
            type: UserActionType.CREATE_USER_SUCCESS,
            payload: data.user
        })
        
    } catch (error) {
        console.log(error);
        dispatch({
            type: UserActionType.CREATE_USER_FAIL,
            payload: error
        })
    }
}

export const deleteUser = (id:string) => async(dispatch:Dispatch) => {
    dispatch({ type: UserActionType.DELETE_USER_REQUEST })
    
    try {
        await axios.delete(`/api/user/${id}`).then(() => {
            dispatch({
                type: UserActionType.DELETE_USER_SUCCESS,
                payload: id,
            });
        })
        
    } catch (error) {
        dispatch({
            type: UserActionType.DELETE_USER_FAIL,
            payload: error
        })
    }
}

export const editUSer = (id: string) => async(dispatch: Dispatch) => {
    dispatch({ type: UserActionType.EDIT_USER_REQUEST })
    try {
        const { data } = await axios.get(`/api/user/${id}`)

        dispatch({
            type: UserActionType.EDIT_USER_SUCCESS,
            payload: data.user,
        });
        
    } catch (error) {
        dispatch({
            type: UserActionType.EDIT_USER_FAIL,
            payload: error,
        });
    }
} 