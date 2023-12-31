import React from 'react';
import './A-choose.css';
import { Link } from 'react-router-dom';
const AboutChoose = ({ data }) => {
  return (
    <section className="A-choose py-3 py-md-4 py-lg-5">
      <div className="container  ">
        <div className="row justify-content-center gap-3 gy-5 gy-md-0">
          <div className="col-12 col-md-6 d-flex flex-column gap-3">
            {data.map((item) => {
              return (
                <div
                  className="single-item shadow py-3 px-2  gap-3 align-items-center d-flex justify-content-between "
                  key={item.id}
                >
                  <img src={item.icon} className="img-fluid  " alt="img" />
                  <div className="info">
                    <h4 className="text-black">{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-12 col-md-5">
            <div className="box-content shadow py-4 px-4">
              <h2>Why Choose Foore</h2>
              <h5 className="mb-3  text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                imperdiet libero id nisi euismod, s
              </h5>
              <p className="lh-medium ">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Duis aute irure dolor in reprehenderit in
                <br />
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                <br />
              </p>
              <button className="btn btn-lg text-white bg-warning text-capitalize rounded-pill fs-6 fw-semibold   ">
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChoose;
