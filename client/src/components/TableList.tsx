/* eslint-disable no-lone-blocks */
import React, {useState, useEffect} from 'react'
import TableItem from './TableItem'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import Loading from './Loading';
import Pagination from './Pagination';
import { fetchUsers } from '../redux/actions/userAction';

const TableList = () => {
    const { users, loading } = useSelector((state: RootState) => state.users);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);

    // Get current products
    const indexOfLastUser = currentPage * productsPerPage;
    const indexOfFirstUser = indexOfLastUser - productsPerPage;
    const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);
    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (loading) {
        return <Loading/>
    } 

    if(users.length < 1) return <h1 className='text-center my-4'>Records not found</h1>

    if (users.length) {
        return (
            <>
                <div className="table-list d-flex flex-column justify-content-between">
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
                            {currentUser.map((user, ind) => {
                                user.ind = ind + 1;
                                return <TableItem user={user} key={user._id} />;
                            })}
                        </tbody>
                    </table>
                    <div className="d-flex flex-row-reverse">
                        <Pagination
                            productsPerPage={productsPerPage}
                            totalProducts={users.length}
                            paginate={paginate}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default TableList