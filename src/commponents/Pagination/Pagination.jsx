import React from 'react';
import { useFilterContext } from '../../context/FilterContext';

const Pagination = () => {
  const { currentPage, nextPage, prevPage, getTotalPages, setCurrentPage } =
    useFilterContext();

  return (
    <div className="row Example">
      <div className="col-12">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={prevPage}>
              Previous
            </button>
          </li>
          {Array.from({ length: getTotalPages() }).map((_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? 'active' : ''
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === getTotalPages() ? 'disabled' : ''
            }`}
          >
            <button className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
