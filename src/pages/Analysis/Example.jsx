import MenuData from '../../data/MenuData';
import { Link } from 'react-router-dom';
import RatingStar from '../../commponents/RatingStar/RatingStar';
import './Example.css';
import { useState } from 'react';
const ITEMS_PER_PAGE = 6; // Number of items to show per page

const Example = () => {
  const menu = MenuData;

  // Function to filter menu items based on price range and rating
  const filteredMenu = (items) => {
    return items.filter(
      (item) =>
        item.price >= minPrice &&
        item.price <= maxPrice &&
        item.rating >= minRating &&
        item.rating <= maxRating
    );
  };

  // ... (rest of the component code)

  // Array of price range objects
  const priceRanges = [
    { id: 1, label: '$50 - $100', min: 50, max: 100 },
    { id: 2, label: '$100 - $200', min: 100, max: 200 },
    { id: 3, label: '$200 - $500', min: 200, max: 500 },
  ];

  // Function to handle checkbox selection
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const range = priceRanges.find((range) => range.id === parseInt(name));

    if (range) {
      setMinPrice(checked ? range.min : 0);
      setMaxPrice(checked ? range.max : 500);
    }
  };

  // State for current page and filter values
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(500);
  const [minRating, setMinRating] = useState(4);
  const [maxRating, setMaxRating] = useState(5);

  // Function to get the total number of pages for pagination
  const getTotalPages = (items) => {
    return Math.ceil(items.length / ITEMS_PER_PAGE);
  };

  // Function to get items for the current page
  const getCurrentItems = (items, page) => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return items.slice(startIndex, endIndex);
  };

  // Filtered menu items based on the price and rating criteria
  const filteredItems = filteredMenu(menu);

  return (
    <div className="row CourseCard justify-content-center mx-auto gy-3 gy-md-4">
      {getCurrentItems(filteredItems, currentPage).map((item) => {
        return (
          <div className="col-12 col-md-4 col-lg-3" key={item.id}>
            <div className="single-card pb-2   ">
              <div className="overflow-hidden image">
                <Link className="  " to={`menu/${item.id}`}>
                  <img
                    src={item.img}
                    className="img-fluid  w-100  "
                    alt="img"
                  />
                </Link>
                <button className="btn rounded-0">
                  <Link className="" to="/">
                    Add To Cart
                  </Link>
                </button>
              </div>
              <div className="card-info text-center  ">
                <h5 className=" my-2 m-0 mb-1 ">{item.title}</h5>
                <div className="d-flex justify-content-center align-items-center gap-1">
                  <RatingStar />
                  <small className="text-muted ">( {item.rating})</small>
                  <small>Reviews ({item.reviews})</small>
                </div>

                <div className=" icons d-flex gap-1 justify-content-center align-items-center  ">
                  <span>${item.price}</span>
                  <span className=" ">${item.oldPrice}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Pagination */}
      <div className="row Example">
        <div className="col-12">
          <ul className="pagination justify-content-center">
            {Array.from({ length: getTotalPages(filteredItems) }).map(
              (_, index) => (
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
              )
            )}
          </ul>
        </div>
      </div>

      {/* Price and Rating Filters */}
      <div className="row mt-3">
        <div className="col-12">
          <div className="d-flex justify-content-center gap-2">
            <span>Price Range:</span>
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
        </div>
      </div>
    </div>
  );
};

export default Example;
