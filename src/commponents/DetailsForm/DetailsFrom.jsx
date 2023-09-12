import React from "react";
import "./c-form.css";
import Payment from "../Payment/Payment";
const DetailsFrom = () => {
  return (
    <div className="col-12 col-md-7     ">
      <div className="c-form shadow mb-5 ">
        <h3 className="mb-3 common text-center py-2">Personal Details</h3>
        <form action="" className=" pb-5   px-4 ">
          <div className="input_div    ">
            <div className="w-100">
              <label htmlFor="name">Frist and last name</label>
              <input
                type="name"
                id="name"
                name="name"
                className="w-100 form-control   "
                placeholder="Your first and last name"
              />
            </div>
          </div>
          <div className="input_div d-flex gap-3 justify-content-between  ">
            <div className="w-100">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-100 form-control   "
                placeholder="Your email"
              />
            </div>
            <div className="w-100">
              <label htmlFor="Phone">Phone nubmer</label>
              <input
                type="text"
                id="number"
                name="number"
                className="w-100 form-control  "
                placeholder="Your Number"
              />
            </div>
          </div>
          <div className="input_div   ">
            <div className="w-100">
              <label htmlFor="address ">Full address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-100 form-control   "
                placeholder="Your full address"
              />
            </div>
          </div>
          <div className="input_div d-flex gap-5    ">
            <div className=" ">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                className="  form-control   "
                placeholder="City"
              />
            </div>
            <div className=" ">
              <label htmlFor="postal">Postal code</label>
              <input
                type="text"
                id="postal"
                name="postal"
                className="w-100 form-control  "
                placeholder="Code"
              />
            </div>
          </div>
        </form>
      </div>
      <Payment />
    </div>
  );
};

export default DetailsFrom;
