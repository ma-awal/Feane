import React from 'react';
import './home-order.css';
import Map from '../Map/Map';
const HomeOrder = () => {
  return (
    <div className="Home-order py-3 py-md-4 py-lg-5">
      <div className="container">
        <h4 className="mb-3 fw-semibold">
          <i>Book A Table</i>
        </h4>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="Order-form  shadow p-3">
              <form action="" className=" ">
                <div className="input_div d-flex flex-column gap-3 justify-content-between mb-4">
                  <div className="w-100">
                    <input
                      type="name"
                      id="name"
                      name="name"
                      className="w-100 form-control   "
                      placeholder="Name"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="email'"
                      id="email"
                      name="email"
                      className="w-100 form-control  "
                      placeholder="Email"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="number'"
                      id="number"
                      name="number"
                      className="w-100 form-control  "
                      placeholder="Number"
                    />
                  </div>
                  <div className="w-100">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>How Many Person ?</option>
                      <option value="1">2</option>
                      <option value="2">4</option>
                      <option value="3">6</option>
                    </select>
                  </div>
                </div>

                <div className=" mt-3  ">
                  <button
                    type="sumit"
                    className="  text-white px-4 bg-warning fs-6 btn       "
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6 bg-warning align-items-center d-flex text-center justify-content-center">
            Map
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOrder;
