/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
//import { useDispatch } from 'react-redux';
//import { fetchUsers } from './redux/actions/userAction';
import Detail from './components/Detail';
import Home from './components/Home';

const App: FC = () => {
    
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchUsers());
    // }, []);

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
                    <Routes>
                        <Route path="/" element={ <Home />} />
                        <Route path="/detail/:id" element={ <Detail />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;
