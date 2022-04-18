import React, {FC} from 'react'
import { IUser } from '../types/user';
import {useDispatch} from "react-redux"
import { deleteUser, editUSer } from '../redux/actions/userAction';


interface IProps {
    user: IUser
}

const TableItem: FC<IProps> = ({ user }) => {
    
    const dispatch = useDispatch()

    return (
        <tr>
            <td>{user.ind}</td>
            <td>
                <img
                    src={`http://localhost:5000/uploads/${user.image}`}
                    alt={user.name}
                    width="25"
                />
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
                <span className="badge bg-primary my-2">Details</span>
                &nbsp;|&nbsp;
                <span
                    className="badge bg-danger my-2"
                    onClick={() => dispatch(deleteUser(user._id))}>
                    Delete
                </span>
                &nbsp;|&nbsp;
                <span
                    className="badge bg-success my-2"
                    onClick={() => dispatch(editUSer(user._id))}>
                    Edit
                </span>
            </td>
        </tr>
    );
}

export default TableItem