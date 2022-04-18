import { IUser, UserAction, UserActionType } from './../../types/user';

interface IState {
    users: IUser[] | null;
    user: IUser | null,
    loading: boolean;
    error: any;
}

const initialState:IState = {
    users: [],
    user: null,
    loading: false,
    error: ""
}

const userReducer = (state:IState = initialState, action: UserAction): IState => {
    switch (action.type) {
        //FETCH USERS
        case UserActionType.USER_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UserActionType.USER_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
        case UserActionType.USER_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        //CREATE USER
        case UserActionType.CREATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UserActionType.CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...state.users, action.payload],
            };
        case UserActionType.CREATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        //DELETE USER
        case UserActionType.DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UserActionType.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.filter((user) => user._id !== action.payload),
            };
        case UserActionType.DELETE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        //EDIT USER
        case UserActionType.EDIT_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UserActionType.EDIT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case UserActionType.EDIT_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
   
}


export default userReducer