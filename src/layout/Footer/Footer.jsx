import React from 'react';
import './footer.css';
import { HiMail } from 'react-icons/hi';
import { BiSolidPhone } from 'react-icons/bi';
import { BiCurrentLocation } from 'react-icons/bi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="footer py-3 py-md-4 py-lg-5 mt-5 ">
      <div className="container    ">
        <div className="row d-flex justify-content-center justify-content-md-between gy-3 gy-md-4 gy-lg-0 pb-3">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="single-box  text-center text-md-start ">
              <h2 className="fw-semibold">
                <i className="text-warning ">Feane</i>
              </h2>
              <p className="lh-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                <br />
                Architecto commodi similique nobis aspernatur ab voluptatibus.
              </p>
              <div className="social-links d-flex justify-content-center justify-content-md-start  mt-2 text-center text-md-start gap-2  ">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="  single-box text-center text-md-start">
              <h4 className=" position-relative  "> Contact Us</h4>
              <ul className="list-group text-white fs-6">
                <li>
                  <HiMail /> maeaolld@gmail.com
                </li>
                <li>
                  <BiSolidPhone /> ++0123404303
                </li>
                <li>
                  <BiCurrentLocation /> Mirpur 10,Dhaka
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="   single-box text-white text-center text-md-start">
              <h4 className="  ">Open Hours</h4>
              <p className="p-0 m-0  ">EveryDay</p>
              <p>10AM -8PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" container text-white text-center border-top pt-4 ">
        &copy;All rights Reserved by Developer@2023
      </div>
    </section>
  );
};

export default Footer;
