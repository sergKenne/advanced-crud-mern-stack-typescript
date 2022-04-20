import React from 'react'
import { RootState } from '../redux/reducers';
import FormInputs from './FormInputs';
import FormEditInputs from './FromEditInputs';
import TableList from './TableList';
import { useSelector } from 'react-redux';

const Home = () => {
    const { user } = useSelector((state: RootState) => state.users);
  return (
      <>
          <div className="col-md-4">
              <h2 className="text-center text-primary h4">Add Record</h2>
              {user ? <FormEditInputs/> : <FormInputs/>}
          </div>
          <div className="col-md-8">
              <h2 className="text-center text-primary h4">Record Present In The Database</h2>
              <div className="py-4 px-2">
                  <TableList/>
              </div>
          </div>
      </>
  );
}

export default Home