import React from 'react';
import './H-banner.css';

const HomeBanner = () => {
  return (
    <section className="H-banner">
      <div className="container   ">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="text   ">
              <h2 className="mb-3 fw-semibold display-4">
                <i>Frist Food Restrant</i>
              </h2>
              <p className="text-white mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                magni, autem exercitationem id rem itaque ratione distinctio
                error, libero aliquam corporis at a et? Cupiditate asperiores
                animi dolore incidunt rerum.
              </p>
              <button className="btn bg-warning rounded-pill px-4 fw-semibold  ">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
