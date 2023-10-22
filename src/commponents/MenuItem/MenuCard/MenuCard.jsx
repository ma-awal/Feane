import React from 'react';
import { useMenu } from '../../../hooks/useMenu';
import './M-card.css';
import { Link } from 'react-router-dom';

import { HiShoppingCart } from 'react-icons/hi';
const MenuCard = () => {
  const { menu } = useMenu();
  return (
    <div class="row  justify-content-center align-items-center  gy-3 gy-md-4 gy-lg-5 ">
      {menu.map((item) => {
        return (
          <div className="col-12 col-md-6 col-lg-4 px-3 " key={item.id}>
            <div className="card-box  border rounded  ">
              <div className=" image text-center py-4 px-3 ">
                <img
                  src={item.img}
                  className="img-fluid  rounded-circle m-auto   "
                  alt="img"
                />
              </div>

              <div className="card-info text-white p-3 rounded">
                <h5 className="fw-semibold">{item.heading}</h5>
                <p className=" lh-base fs-6 ">{item.title}</p>
                <div className=" icon d-flex justify-content-between">
                  <span className="fs-5  fw-semibold">${item.price}</span>
                  <span className="rounded-circle bg-warning text-white">
                    <HiShoppingCart className="fs-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCard;
