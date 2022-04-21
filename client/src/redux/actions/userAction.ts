import { IUser } from './../../types/user';
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

export const addUser = (user: any) => async (dispatch: Dispatch) => {
    
    dispatch({ type: UserActionType.CREATE_USER_REQUEST });

    fetch('/api/user', {method: 'POST',body: user,})
        .then(res => res.json())
        .then(data => {
            console.log(data.user);
            dispatch({
                type: UserActionType.CREATE_USER_SUCCESS,
                payload: data.user
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: UserActionType.CREATE_USER_FAIL,
                payload: err
            })
        })

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

export const editUser = (id:string) => (dispatch:Dispatch, getState:any) => {
    const user = getState().users.users.find((el: IUser) => el._id === id)
    dispatch({
        type: UserActionType.EDIT_USER,
        payload: user
    })
}

export const updateUser = (id:string, user:any) => async(dispatch:Dispatch, getState: any) => {
    dispatch({ type: UserActionType.UPDATE_USER_REQUEST })
    try {
        const { data } = await axios.put(`/api/user/${id}`, user);

        let newUsers = getState().users.users;
        //newUsers = await newUsers.data.users.users
        // let newUsers = await axios.get('/api/user');
        // newUsers = await newUsers.data.users.users

        // fetch('/api/user')
        //     .then(res => res.json())
        //     .then(result => {
        //         let newUsers = result.users;
        //         let indOfUser = newUsers.findIndex((el: IUser) => el._id === id);
        //         newUsers[indOfUser] = data.user;
        //         dispatch({
        //             type: UserActionType.UPDATE_USER_SUCCESS,
        //             payload: newUsers,
        //         });
        //     } )

        let indOfUser = newUsers.findIndex((el: IUser) => el._id === id);
        newUsers[indOfUser] = data.user;
        dispatch({
            type: UserActionType.UPDATE_USER_SUCCESS,
            payload: newUsers,
        });
    } catch (error) {
        dispatch({
            type: UserActionType.UPDATE_USER_FAIL,
            payload: error,
        });
    }
}

export const userDetail = (id: string) => async(dispatch: Dispatch) => {
    dispatch({ type: UserActionType.USER_DETAIL_REQUEST })
    try {
        const { data } = await axios.get(`/api/user/${id}`)

        dispatch({
            type: UserActionType.USER_DETAIL_SUCCESS,
            payload: data.user,
        });
        
    } catch (error) {
        dispatch({
            type: UserActionType.USER_DETAIL_FAIL,
            payload: error,
        });
    }
} 