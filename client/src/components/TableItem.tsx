import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { IUser } from '../types/user';
import {useDispatch} from "react-redux"
import { deleteUser, editUser } from '../redux/actions/userAction';


interface IProps {
    user: IUser
}

const TableItem: FC<IProps> = ({ user }) => {
    
    const dispatch = useDispatch()

    return (
        <tr>
            <td>{user.ind}</td>
            <td>
                <Link to={`/detail/${user._id}`}>
                    <img
                        src={`https://advanced-crud-mern-typescript.herokuapp.com/uploads/${user.image}`}
                        alt={user.name}
                        width="25"
                    />
                </Link>
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
                <span className="badge bg-primary my-2">
                    <Link to={`/detail/${user._id}`}>Details</Link>
                </span>
                &nbsp;|&nbsp;
                <span
                    className="badge bg-danger my-2"
                    onClick={() => dispatch(deleteUser(user._id))}>
                    Delete
                </span>
                &nbsp;|&nbsp;
                <span
                    className="badge bg-success my-2"
                    onClick={() => dispatch(editUser(user._id))}>
                    Edit
                </span>
            </td>
        </tr>
    );
}

export default TableItem