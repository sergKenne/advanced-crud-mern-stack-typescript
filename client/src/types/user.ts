
export interface IUser {
    _id: string;
    name: string;
    email: string;
    phone: string;
    image: string;
    ind?: number;
}

export enum UserActionType {
    USER_LIST_REQUEST = 'USER_LIST_REQUEST',
    USER_LIST_SUCCESS = 'USER_LIST_SUCCESS',
    USER_LIST_FAIL = 'USER_LIST_FAIL',
    USER_LIST_ERROR = 'USER_LIST_ERROR',

    CREATE_USER_REQUEST = 'CREATE_USER_REQUEST',
    CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS',
    CREATE_USER_FAIL = 'CREATE_USER_FAIL',

    DELETE_USER_REQUEST = 'DELETE_USER_REQUEST',
    DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
    DELETE_USER_FAIL = 'DELETE_USER_FAIL',

    EDIT_USER_REQUEST = 'EDIT_USER_REQUEST',
    EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS',
    EDIT_USER_FAIL = 'EDIT_USER_FAIL',
}

//FETCH USERS
interface FetchUsersAction {
    type: UserActionType.USER_LIST_REQUEST;
}

interface FetchUsersActionSuccess {
    type: UserActionType.USER_LIST_SUCCESS;
    payload: IUser[] | [];
}

interface FetchUserFail {
    type: UserActionType.USER_LIST_FAIL;
    payload: string
}


//CREATE USER
interface CreateUserRequest {
    type: UserActionType.CREATE_USER_REQUEST
}

interface CreateUserSuccess {
    type: UserActionType.CREATE_USER_SUCCESS,
    payload: IUser
}

interface CreateUserFail {
    type: UserActionType.CREATE_USER_FAIL,
    payload: any
}


//DELET USER
interface DeleteUserRequest {
    type: UserActionType.DELETE_USER_REQUEST
}

interface DeleteUserSuccess {
    type: UserActionType.DELETE_USER_SUCCESS,
    payload: string
}

interface DeleteUserFail {
    type: UserActionType.DELETE_USER_FAIL,
    payload: any
}

//DELET USER
interface EditUserRequest {
    type: UserActionType.EDIT_USER_REQUEST
}

interface EditUserSuccess {
    type: UserActionType.EDIT_USER_SUCCESS,
    payload: IUser
}

interface EditUserFail {
    type: UserActionType.EDIT_USER_FAIL,
    payload: any
}



export type UserAction =
    | FetchUsersAction
    | FetchUserFail
    | FetchUsersActionSuccess
    | CreateUserRequest
    | CreateUserSuccess
    | CreateUserFail
    | DeleteUserRequest
    | DeleteUserSuccess
    | DeleteUserFail
    | EditUserRequest
    | EditUserSuccess
    | EditUserFail;
