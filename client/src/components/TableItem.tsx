import React from 'react'

const TableItem = () => {
  return (
      <tr>
          <td>#Id</td>
          <td>
              <img src="http://localhost:5000/uploads/1649966992906.jpg" width="25" />
          </td>
          <td>name</td>
          <td>email</td>
          <td>phone</td>
          <td>
              <span className="badge bg-primary my-2">Details</span>
              &nbsp;|&nbsp;
              <span className="badge bg-danger my-2">Delete</span>
              &nbsp;|&nbsp;
              <span className="badge bg-success my-2">Edit</span>
          </td>
      </tr>
  );
}

export default TableItem