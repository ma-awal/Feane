import React from 'react';
import './c-form.css';
const ContactForm = () => {
  return (
    <div className="c-form">
      <h4 className="mb-3">Drop Us a Line</h4>
      <form action="" className=" ">
        {/* <div className="input_div">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            name="name"
            className="form-control"
            placeholder="Name"
          />
        </div> */}
        <div className="input_div d-flex flex-column gap-3 justify-content-between mb-4">
          <div className="w-100">
            <input
              type="name"
              id="name"
              name="name"
              className="w-100 form-control   "
              placeholder="Your Name"
            />
          </div>
          <div className="w-100">
            <input
              type="email'"
              id="email"
              name="email"
              className="w-100 form-control  "
              placeholder="Your Email"
            />
          </div>
        </div>
        {/* <div className="input_div d-flex gap-3 justify-content-between mb-4">
          <div className="w-100">
            <input
              type="number"
              id="number"
              name="number"
              className="w-100 form-control   "
              placeholder="Your Number"
            />
          </div>
          <div className="w-100">
            <input
              type="subject'"
              id="subject"
              name="subject"
              className="w-100 form-control  "
              placeholder="Your Subject"
            />
          </div>
        </div> */}
        <div className="textarea ">
          <textarea
            name=""
            id=""
            className="form-control text_area"
            placeholder="Your Message"
            cols="30"
            rows="3"
          ></textarea>
        </div>
        <div className=" mt-3  text-center">
          <button type="sumit" className=" rounded-0    btn   ">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
