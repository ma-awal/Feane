import React from 'react';
import { Link } from 'react-router-dom';
import './C-list.css';

const CartList = () => {
  return (
    <>
      <section className="C-list py-3 py-md-4 py-lg-5">
        <div className="container">
          <div className="row row-1 d-none d-md-flex text-uppercase">
            <div className="  col-md-5">
              <h6 className=" ">Product</h6>
            </div>
            <div className=" col-md-2">
              <h6 className=" ">Price</h6>
            </div>
            <div className="col-md-3">
              <h6 className=" ">Quantity</h6>
            </div>
            <div className="col-md-2">
              <h6 className=" m-0 p-0">Subtotal</h6>
            </div>
          </div>

          <div className="row row-2 m-0 p-0  border align-items-center justify-content-between gy-3 gy-md-0 mb-2 bg-light py-2 ">
            <div className="col-12 col-md-5  ">
              <div className="items d-flex justify-content-between justify-content-md-start      ">
                <h6 className="d-md-none  mb-0 ">Product</h6>
                <div className="image     ">
                  <img
                    src="../../assets/burger.jpeg"
                    className="d-none d-md-inline-block ms-0  rounded-circle "
                    alt="no image"
                  />
                  <span className=" ms-5">Best food</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="items d-flex justify-content-between align-items-center  ">
                <h6 className="d-md-none">Price</h6>

                <span>$234</span>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="items d-flex  justify-content-between align-items-center  ">
                <h6 className="d-md-none">Quantity</h6>

                <div className="btns">
                  <button className="btn rounded-0">-</button>
                  <button className="btn rounded-0">1</button>
                  <button className="btn rounded-0">+</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2 ">
              <div className="items d-flex  justify-content-between   align-items-center  ">
                <h6 className="d-md-none">Subtotal</h6>
                <span className=" ms-md-2">$334</span>
              </div>
            </div>
          </div>

          <div className="row row-3 py-3 ">
            <div className="col-12 col-md-6">
              <div className="btns gap-2 d-flex flex-column flex-md-row">
                <button className="  bg-light   btn  ">
                  <Link link="/promocode">Promocode</Link>
                </button>
                <button className=" common     btn ">
                  <Link to="/cupon">Apply cupon</Link>
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 text-md-end mt-2 mt-md-0">
              <button className="  bg-light   btn ">Update Cart</button>
            </div>
          </div>
        </div>
      </section>
      <section className="Total py-3 py-md-4 py-lg-5">
        <div className="container">
          <div className="row row-4 justify-content-md-end">
            <div className="col-12 col-md-5 d-flex flex-column gap-2">
              <div className="items d-flex justify-content-between">
                <h5 className="mb-0">Subtotal</h5>
                <h5 className="mb-0">$3435</h5>
              </div>
              <div className="items d-flex justify-content-between">
                <h5 className="mb-0">Delivery fee</h5>
                <h5 className="mb-0">$3435</h5>
              </div>
              <div className="items d-flex justify-content-between">
                <h4 className="mb-0">Total</h4>
                <h4 className="mb-0">$3435</h4>
              </div>
              <div className="items text-center  ">
                <button className="btn rounded-0 common text-decoration-none w-100">
                  <Link className="" to="/checkout">
                    Proceed to Checkout
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartList;
