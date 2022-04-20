import React, { FC, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import Loading from './Loading';
import { userDetail } from '../redux/actions/userAction';

const Detail: FC = () => {
    const { detail, loading } = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(userDetail(id))
    }, []);

    if (loading) {
        return <Loading/>
    }

    return (
        <div className="detail d-flex flex-row justify-content-center align-items-center">
            <div className="row pt-2">
                <div className="card p-0" style={{ width: '640px' }}>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img
                                src={`/${detail.image}`}
                                className="img-fluid rounded-start"
                                alt="...git status"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title ">Username</h5>
                                <p className="card-text ">{detail.name}</p>
                                <h5 className="card-title">Email</h5>
                                <p className="card-text">{detail.email}</p>
                                <h5 className="card-title">Telephone</h5>
                                <p className="card-text">{detail.phone}</p>
                                <Link to="/" className="btn btn-primary">
                                    Go to records
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
