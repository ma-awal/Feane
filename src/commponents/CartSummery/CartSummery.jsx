import React from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './summery.css';
const CartSummery = () => {
  return (
    <div className="col-12 col-md-5 col-xxl-4 box   ">
      <h3 className="   py-2 text-center border  m-0">Order Summary</h3>
      <div className="border p-3 ">
        <ul className="list-group mb-3  ">
          <li className="d-flex justify-content-between align-items-center lh-lg">
            <span className="d-flex align-items-center gap-1">
              <AiOutlineMinusCircle className="fs-5" />
              Lorem ipsum dolor sit amet.
            </span>
            <span>$ 343</span>
          </li>
        </ul>
        <div className=" div d-flex flex-column gap-2 ">
          <div className="items d-flex justify-content-between">
            <h6 className="mb-0">Subtotal</h6>
            <h6 className="mb-0">$3435</h6>
          </div>
          <div className="items d-flex justify-content-between">
            <h6 className="mb-0">Delivery fee</h6>
            <h6 className="mb-0">$3435</h6>
          </div>
          <div className="items d-flex justify-content-between ">
            <h4 className="mb-0 text-danger">Total</h4>
            <h4 className="mb-0 text-danger">$3435</h4>
          </div>
          <div className="items text-center   ">
            <button className="btn rounded-0 py-2 common text-decoration-none w-100">
              <Link className="fw-semibold" to="/Order">
                Order Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummery;
