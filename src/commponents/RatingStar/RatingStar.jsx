import React from 'react';
import './star.css';
import { AiFillStar } from 'react-icons/ai';
const RatingStar = () => {
  return (
    <div className="d-flex justify-content-center   text-warning">
      <small>
        <AiFillStar />
      </small>
      <small>
        <AiFillStar />
      </small>
      <small>
        <AiFillStar />
      </small>
    </div>
  );
};

export default RatingStar;
