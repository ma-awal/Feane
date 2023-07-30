import React from 'react';
import { useFilterContext } from '../../context/FilterContext';

const Filter = () => {
  const {
    minPrice,
    maxPrice,
    minRating,
    maxRating,
    setMinPrice,
    setMaxPrice,
    setMinRating,
    setMaxRating,
    priceRanges,
  } = useFilterContext();

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const range = priceRanges.find((range) => range.id === parseInt(name));

    if (range) {
      setMinPrice(checked ? range.min : 0);
      setMaxPrice(checked ? range.max : 500);
    }
  };

  const handleRatingChange = (event) => {
    const { name, value } = event.target;

    if (name === 'minRating') {
      setMinRating(parseInt(value));
    } else if (name === 'maxRating') {
      setMaxRating(parseInt(value));
    }
  };

  return (
    <div className="col-12 col-md-4 col-lg-3">
      <div
        className="d-flex justify-content-center flex-column gap-2 shadow
       px-3 py-2 "
      >
        {' '}
        <h4>Search by price</h4>
        {priceRanges.map((range) => (
          <div key={range.id} className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name={range.id}
              checked={minPrice === range.min && maxPrice === range.max}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label">{range.label}</label>
          </div>
        ))}
      </div>
      <div
        className="d-flex shadow
       px-3 py-2 justify-content-center flex-column  gap-2 mt-2"
      >
        <h4 className="mb-0">Search by rating</h4>
        <span>Minimum Rating:</span>
        <select
          name="minRating"
          value={minRating}
          onChange={handleRatingChange}
        >
          {[1, 2, 3, 4, 5].map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
        <span>Maximum Rating:</span>
        <select
          name="maxRating"
          value={maxRating}
          onChange={handleRatingChange}
        >
          {[1, 2, 3, 4, 5].map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
