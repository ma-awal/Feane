import React from 'react';
import { Link } from 'react-router-dom';
import RatingStar from '../RatingStar/RatingStar';
import { useFilterContext } from '../../context/FilterContext';
import Pagination from '../Pagination/Pagination';

const FilteredItems = () => {
  const { getCurrentItems } = useFilterContext();

  return (
    <div
      div
      className="col-12 col-md-8 row justify-content-center gy-3 gy-md-4 p-0 m-0"
    >
      {getCurrentItems().map((item) => {
        return (
          <div className=" col-12 col-sm-6 col-lg-4   " key={item.id}>
            <div className="single-card pb-2 ">
              <div className="overflow-hidden  image">
                <Link className=" " to={`menu/${item.id}`}>
                  <img src={item.img} className="img-fluid w-100" alt="img" />
                </Link>
                <button className="btn rounded-0">
                  <Link className="" to="/">
                    Add To Cart
                  </Link>
                </button>
              </div>
              <div className="card-info text-center">
                <h5 className="my-2 m-0 mb-1">{item.title}</h5>
                <div className="d-flex justify-content-center align-items-center gap-1">
                  <RatingStar />
                  <small className="text-muted">({item.rating})</small>
                  <small>Reviews ({item.reviews})</small>
                </div>
                <div className="icons d-flex gap-1 justify-content-center align-items-center">
                  <span>${item.price}</span>
                  <span className="">${item.oldPrice}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Pagination />
    </div>
  );
};

export default FilteredItems;
