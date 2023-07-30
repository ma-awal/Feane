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
      <h2 className="text-center">Special Menu</h2>
      <div className="col-12 col-lg-6 mx-auto   py-2   ">
        <div className=" box d-flex justify-content-center align-items-center mb-3 mb-lg-5  flex-wrap ">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className={`text-uppercase rounded-0 btn ${
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
