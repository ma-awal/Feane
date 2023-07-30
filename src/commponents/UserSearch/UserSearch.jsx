import React from 'react';
import './U-search.css';
import { RxCross1 } from 'react-icons/rx';
import { useNav } from '../../hooks/useNav';
import { BiSearch } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
const UserSearch = () => {
  const { search, handleCloseSearch } = useNav();

  return (
    <section
      className={`  U-search position-fixed w-100 h-100 bg-warnning  top-0 start-0 bottom-0 start-0  ${
        search ? 'active' : ''
      }`}
    >
      <div className="box d-flex justify-content-center align-items-center min-vh-100  py-3 py-lg-4 py-xl-5  ">
        <div className="input-field  pb-5 px-4 col-10  col-lg-8 col-xl-5 ">
          <div className="text-end mb-3">
            <RxCross1 className="fs-5 times  " onClick={handleCloseSearch} />
          </div>
          <h4>Search Here</h4>
          <div className="input-search  d-flex justify-content-between align-items-center my-3 ">
            <input
              type="text"
              className="px-2 text-muted"
              placeholder="Type Your Keyword and hit enter fw-medium"
            />
            <button type="search " className="btn rounded-0 px-4 py-2">
              <BiSearch className="fs-4 fw-bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSearch;
