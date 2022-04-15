import React, {FC} from 'react'

const FormInputs: FC = () => {
  return (
      <form className="py-4 px-2">
          <div className="mb-3">
              <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Username"
              />
          </div>
          <div className="mb-3">
              <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Email"
              />
          </div>
          <div className="mb-3">
              <input
                  type="phone"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="phone"
                  placeholder="9112340234"
              />
          </div>
          <div className="input-group mb-3">
              <input type="file" className="form-control" id="inputGroupFile02" />
              {/* <label className="input-group-text" for="inputGroupFile02">Upload</label> */}
          </div>
          <div className="card mb-2" style={{ width: '8rem', height: '8rem' }}>
              <img
                  src="http://localhost:5000/uploads/1649966992906.jpg"
                  className="card-img-top"
                  alt="..."
              />
          </div>

          <button type="submit" className="btn btn-success d-block w-100">
              Upload Record
          </button>
      </form>
  );
}

export default FormInputs