import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './A-client.css';
const AboutClient = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    // responsive: [
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 576,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <section className="Client py-3 py-md-4 py-lg-5">
      <div className="container py-3 py-md-4 py-lg-5">
        <h2 className="text-white text-center mb-3 mb-md-4">
          What Our client says
        </h2>
        <div className="row justify-content-center">
          <Slider {...settings}>
            {data.map((item) => (
              <div
                key={item.id}
                className="  single-slide d-flex flex-column flex-md-row align-items-center gap-3 gap-lg-4  py-3 px-3 py-md-4 py-lg-5  px-lg-4 rounded      "
              >
                <img
                  src={item.img}
                  className="img-fluid  rounded-circle"
                  alt="img"
                />

                <div className="  text-center text-md-start  ps-3 comment text-white">
                  <h5 className="text-white fw-normal ">
                    <q>{item.text}</q>
                  </h5>
                  <h5 className="mb-0 text-white ">{item.name}</h5>
                  <p className="m-0">20 Jan ,2023</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutClient;
