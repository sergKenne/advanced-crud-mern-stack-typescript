import { IUser, UserAction, UserActionType } from './../../types/user';

interface IState {
    users: IUser[] | null;
    user: IUser | null,
    detail: IUser
    loading: boolean;
    error: any;
}

const initialState:IState = {
    users: [],
    user: null,
    detail: {name:"", email:"", phone:"", image:""},
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
        // case UserActionType.CREATE_USER_REQUEST:
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // case UserActionType.CREATE_USER_SUCCESS:
        //     return {
        //         ...state,
        //         users: [...state.users, action.payload],
        //         loading: false,
        //     };
        // case UserActionType.CREATE_USER_FAIL:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.payload,
        //     };

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
        case UserActionType.EDIT_USER:
            return {
                ...state,
                user: action.payload,
            };
        //UPDATE USER
        case UserActionType.UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UserActionType.UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                user: null,
            };
        case UserActionType.UPDATE_USER_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        //USER DETAIL
        case UserActionType.USER_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UserActionType.USER_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                detail: action.payload,
            };
        case UserActionType.USER_DETAIL_FAIL:
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