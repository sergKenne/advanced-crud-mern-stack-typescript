
export interface IUser {
    _id?: string;
    name: string;
    email: string;
    phone: string;
    image: string;
    imageFile?: any;
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

    EDIT_USER = 'EDIT_USER',

    EDIT_USER_REQUEST = 'EDIT_USER_REQUEST',
    EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS',
    EDIT_USER_FAIL = 'EDIT_USER_FAIL',

    UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST',
    UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
    UPDATE_USER_FAIL = 'UPDATE_USER_FAIL',
    
    USER_DETAIL_REQUEST = 'USER_DETAIL_REQUEST',
    USER_DETAIL_SUCCESS = 'USER_DETAIL_SUCCESS',
    USER_DETAIL_FAIL = 'USER_DETAIL_FAIL',
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


//DELETE USER
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

//EDIT USER
interface EditUser {
    type: UserActionType.EDIT_USER,
    payload: IUser
}

//UPDATE USER
interface UpdateUserRequest {
    type: UserActionType.UPDATE_USER_REQUEST
}

interface UpdateUserSuccess {
    type: UserActionType.UPDATE_USER_SUCCESS,
    payload: IUser[]
}

interface UpdateUserFail {
    type: UserActionType.UPDATE_USER_FAIL,
    payload: any
}


//USER DETAIL
interface UserDetailRequest {
    type: UserActionType.USER_DETAIL_REQUEST
}

interface UserDetailSuccess {
    type: UserActionType.USER_DETAIL_SUCCESS;
    payload: IUser;
}

interface UserDetailFail {
    type: UserActionType.USER_DETAIL_FAIL;
    payload: any;
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
    | EditUser
    | UpdateUserRequest
    | UpdateUserSuccess
    | UpdateUserFail
    | UserDetailRequest
    | UserDetailSuccess
    | UserDetailFail;
