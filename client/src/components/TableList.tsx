/* eslint-disable no-lone-blocks */
import React, {useEffect} from 'react'
import TableItem from './TableItem'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import $ from 'jquery';

import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';


const TableList = () => {

    const { users, loading } = useSelector((state: RootState) => state.users);
    console.log("users from TableList", users);

    useEffect(() => {
        // $('#data-table').DataTable({
        //     paging: true,
        // });

    }, [users])

    if (loading) {
        return <h1>Loading....</h1>
    } 

    if (users.length) {
        return (
            <table className="table table-hover border-top" id="data-table">
                <thead>
                    <tr>
                        <th>#Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, ind) => {
                        user.ind = ind + 1
                        return <TableItem user={user} key={user._id} />
                    })}
                </tbody>
            </table>
        );
    }
}

export default TableList