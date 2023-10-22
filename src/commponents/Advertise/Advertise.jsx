import React from 'react';
import './advertise.css';
import img1 from '../../assets/o1.jpg';
import img2 from '../../assets/o2.jpg';
const Advertise = () => {
  return (
    <div className="Advertise py-3 py-md-4 py-lg-5">
      <div className="container">
        <div className="row justify-content-center gy-3 gy-lg-0">
          <div className="col-12 col-md-6    ">
            <div className="box d-flex flex-column flex-lg-row align-items-center justify-content-start gap-3 rounded-3 px-5 py-4">
              <div className="image">
                <img
                  src={img1}
                  alt=""
                  className="  border-warning border-5 border  rounded-circle"
                />
              </div>
              <div className="text d-flex flex-column gap-1 gy-2  ">
                <i className=" fs-5 ">Tasty Thursday</i>
                <i className="display-6 fw-medium mb-2    ">16% Off</i>
                <button className="btn  btn-lg fw-semibold   bg-warning text-white rounded-pill px-4 fs-6">
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6    ">
            <div className="box d-flex flex-column flex-lg-row align-items-center justify-content-start gap-3 rounded-3 px-5 py-4">
              <div className="image">
                <img
                  src={img2}
                  alt=""
                  className="  border-warning border-5 border  rounded-circle"
                />
              </div>
              <div className="text d-flex flex-column gap-1 gy-2  ">
                <i className=" fs-5 ">Pizza Days</i>
                <i className="display-6 fw-medium mb-2    ">16% Off</i>
                <button className="btn  btn-lg fw-semibold   bg-warning text-white rounded-pill px-4 fs-6">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
