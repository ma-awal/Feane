import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './H-client.css';
const HomeClient = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="Client py-3 py-md-4 py-lg-5 mt-3 mt-md-4 mt-lg-5">
      <div className="container  ">
        <h2 className="  text-center mb-3 mb-md-4">
          <i className="text-capitalize"> What Our client says</i>
        </h2>
        <div className="row justify-content-center">
          <Slider {...settings} className="py-4">
            {data.map((item) => (
              <div className="col">
                <div
                  key={item.id}
                  className="single-slide d-flex flex-column flex-md-row align-items-center gap-2   py-2 px-3 py-md-4 py-lg-5  px-lg-4 rounded  text-white     "
                >
                  <img
                    src={item.img}
                    className="img-fluid  rounded-circle border border-warning border-3"
                    alt="img"
                  />

                  <div className="text-center text-md-start  ps-3  ">
                    <p className="  mb-0 p-0 lh-base mb-2 fs-6  ">
                      <i>
                        <q> {item.text} </q>
                      </i>
                    </p>
                    <h6 className="mb-0 p-0 fw-semibold text-white ">
                      {item.name}
                    </h6>
                    <small className="fw-semibold  ">20 Jan ,2023</small>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeClient;
