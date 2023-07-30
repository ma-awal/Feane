import React from 'react';
import './H-About.css';
import img from '../../assets/home_1.jpg';
import { Link } from 'react-router-dom';
const HomeAbout = () => {
  return (
    <section className="H-about py-3 py-md-4 py-lg-5">
      <div className="container  py-3 py-md-4 py-lg-5">
        <div className=" row  gap-0 m-0 p-0   ">
          <div className=" col  gap-0 m-0 p-0    image d-none d-lg-block text-center  ">
            <img src={img} className="img-fluid  " alt="img" />
          </div>

          <div className="text col  gap-0 m-0 p-0   ">
            <span className="w-25 border-top"></span>
            <h2 className="mb-3">Some words about us</h2>
            <h4 className="mb-3">
              Cum doctus civibus efficiantur in imperdiet deterruisset.
            </h4>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              <br />
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              <br />
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <button className="btn rounded-1">
              <Link className="text-white" to="/">
                Red more
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
