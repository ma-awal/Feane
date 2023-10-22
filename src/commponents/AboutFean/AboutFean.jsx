import React from 'react';
import './about-fean.css';
import img1 from '../../assets/about-img.png';

const AboutFean = () => {
  return (
    <div className="About-fean py-3 py-md-4 py-lg-5">
      <div className="container">
        <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center">
          <div className="image text-center">
            <img src={img1} className="img-fluid" alt="img" />
          </div>

          <div className="text">
            <h4 className="text-white text-capitalize fw-semibold">
              <i>We are Feane</i>
            </h4>
            <p className="text-white text-capitalize fs-6 fw-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              hic accusantium culpa. Deserunt natus quaerat tempora doloremque.
              Tempora dolores assumenda molestiae amet repellat vel sapiente aut
              cumque suscipit quas sed officiis deserunt temporibus harum
              repudiandae aspernatur alias dicta fugit natus, laboriosam porro
              adipisci unde? Consequatur ex saepe inventore.
            </p>
            <button className="btn btn-lg px-4 rounded-pill fs-6 text-white bg-warning mt-3">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFean;
