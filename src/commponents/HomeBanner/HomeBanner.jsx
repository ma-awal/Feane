import React from 'react';
import './H-banner.css';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <section className="H-banner">
      <div className="container-fluid   ">
        <div className="text ps-lg-5 ">
          <h2>Mixed Thay Vegetables</h2>
          <h4>Avocado, Mango, Tomatoe</h4>
          <button className="btn common rounded-1 mt-3">
            <Link to="/example">Read More</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
