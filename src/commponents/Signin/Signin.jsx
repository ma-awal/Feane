import React from 'react';
import './style.css';

const Signin = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center ">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="Signin shadow py-4  ">
            <h3 className="mb-3 common  text-center py-2 text-uppercase">
              sign in
            </h3>
            <form action="" className="  py-3  px-4 ">
              <div className="input_div     ">
                <div className="w-100 mb-3">
                  <label htmlFor="email">Email </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-100 form-control   "
                    placeholder="Email"
                  />
                </div>
                <div className="w-100  ">
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    className="w-100 form-control  "
                    placeholder="Password"
                  />
                </div>
                <div className="sumbit-btn text-center">
                  <button className=" btn bg-warning rounded-pill text-white px-4 border-0   mt-4  fw-medium px-4 fs-6  py-2     mx-auto mb-2 ">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
