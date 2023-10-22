import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './A-Staff.css';
const AboutStuff = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className=" A-staff py-3 py-md-4 py-lg-5">
      <div className="container py-3 py-md-4 py-lg-5">
        <h2 className="  text-center mb-3 mb-md-4 text-capitalize  ">
          <i className="fw-semibold"> Our Chefs and staff</i>
        </h2>
        <div className="row justify-content-center">
          <Slider className="py-4" {...settings}>
            {data.map((item) => (
              <div
                key={item.id}
                className="  single-slide   align-items-center       "
              >
                <img src={item.img} className="img-fluid   " alt="img" />
                <div className=" info text-center py-2 ">
                  <h5 className="mb-0 text-white ">{item.name}</h5>
                  <p className="m-0 text-white"> {item.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutStuff;
