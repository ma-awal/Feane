import React, { useState } from 'react';
import { useMenu } from '../../../hooks/useMenu';
import './Categories.css';
const Categories = () => {
  const { categories, filteredItems } = useMenu();
  const [active, setActive] = useState(0);
  const handleActive = (index) => {
    setActive(index);
    filteredItems(categories[index]);
  };
  return (
    <div div className="Categories">
      <h3 className="text-center">
        <i>Our menu</i>
      </h3>
      <div className="col-12 col-lg-6 mx-auto   py-2   ">
        <div className=" single-card d-flex justify-content-center align-items-center mb-3 mb-lg-5  flex-wrap ">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className={`text-uppercase rounded-pill  btn ${
                  active === index ? 'active' : ''
                }`}
                onClick={() => handleActive(index)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
