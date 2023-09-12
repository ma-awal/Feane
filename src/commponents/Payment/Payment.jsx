import React from "react";
import "./c-form.css";
import { MdOutlinePayment } from "react-icons/md";
const Payment = () => {
  return (
    <div className="payment">
      <div className="c-form shadow  ">
        <h3 className="mb-3 common text-center py-2">Payment Method</h3>
        <form action="" className=" pb-5   px-4 ">
          <div className="check_div d-flex justify-content-between align-items-center    px-2">
            <div className="div">
              <input type="radio" placeholder="radio" className="me-2" />
              <label htmlFor="Pay">Credit card</label>
            </div>
            <MdOutlinePayment className="fs-3" />
          </div>
          <div className="input_div    ">
            <div className="w-100">
              <label htmlFor="name">Name on card</label>
              <input
                type="name"
                id="name"
                name="name"
                className="w-100 form-control   "
                placeholder="Your first and last name"
              />
            </div>
          </div>

          <div className="input_div mb-3  ">
            <div className="w-100">
              <label htmlFor="address ">Card Number</label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-100 form-control   "
                placeholder="Card number"
              />
            </div>
          </div>
          <div className="d-flex gap-5 align-items-center mb-3">
            <div className="input_div">
              <label htmlFor="Expira">Expiration date</label>
              <input
                type="date"
                name="data"
                id="date"
                className="border form-control "
                placeholder=" "
              />
            </div>

            <div className=" Input_div">
              <label htmlFor="code">Security code</label>
              <input
                type="text"
                name="sequrity"
                id="sequrity"
                placeholder="ccv"
                className="border form-control rounded-0 py-2"
              />
            </div>
          </div>
          <div className="check_div d-flex justify-content-between align-items-center mb-3   px-2">
            <div className="div">
              <input type="radio" placeholder="radio" className="me-2" />
              <label htmlFor="Pay">Pay with paypal</label>
            </div>
            <MdOutlinePayment className="fs-3" />
          </div>
          <div className="check_div d-flex justify-content-between align-items-center    px-2">
            <div className="div">
              <input type="radio" placeholder="radio" className="me-2" />
              <label htmlFor="Pay">Pay with cash</label>
            </div>
            <MdOutlinePayment className="fs-3" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
