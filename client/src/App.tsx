/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useEffect } from 'react';
import FormInputs from './components/FormInputs';
import Navbar from './components/Navbar';
import TableList from './components/TableList';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from './redux/reducers';
import { fetchUsers } from './redux/actions/userAction';
import FormEditInputs from './components/FromEditInputs';

const App: FC = () => {
    const { user, loading } = useSelector((state: RootState) => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <h1 className="text-center py-3 border-bottom border-2">
                    Advanced CRUD App Using React-Redux Typescript And Node
                </h1>
            </div>
            <div className="container-fluid">
                <div className="row pt-2">
                    <div className="col-md-4">
                        <h2 className="text-center text-primary h4">Add Record</h2>
                        {user ? <FormEditInputs /> : <FormInputs />}
                    </div>
                    <div className="col-md-8">
                        <h2 className="text-center text-primary h4">
                            Record Present In The Database
                        </h2>
                        <div className="py-4 px-2">
                            <TableList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
