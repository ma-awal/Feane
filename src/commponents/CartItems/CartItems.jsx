import React from 'react';
import './C-items.css';
import { RxCross1 } from 'react-icons/rx';
import { useNav } from '../../hooks/useNav';
import { FaTrash } from 'react-icons/fa';
import MenuData from '../../data/MenuData';
import { Link } from 'react-router-dom';
const CartItems = () => {
  const { search, handleCloseCart } = useNav();

  return (
    <section className={`  C-items rounded     ${search ? 'active' : ''}`}>
      <div className=" box position-relative m-0 p-0    ">
        <div className="text-end mb-3  pe-4  ">
          <RxCross1
            className="fs-5 times   text-black  "
            onClick={handleCloseCart}
          />
        </div>
        <ul className="list-unstyled">
          {MenuData.map((item) => {
            return (
              <li key={item.id}>
                <div className="row  row-cols-3 cart-list px-3">
                  <div className="col-3">
                    <img src={item.img} className="img-fluid" alt="" />
                  </div>
                  <div className="col-7">
                    <div className="info">
                      <p className="text-black m-0 p-0">{item.title}</p>
                      <p className="text-black m-0 p-0">${item.price}</p>
                    </div>
                  </div>
                  <div className="col-2">
                    <button className="btn">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="btns  bg-white    position-sticky bottom-0 end-0 start-0  ">
          <button className="block btn w-100 mb-1 ">
            <Link className="" to="/">
              View Cart
            </Link>
          </button>
          <button className="block btn  w-100">
            <Link className=" text-white" to="/">
              Check Out
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
