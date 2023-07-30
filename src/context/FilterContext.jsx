// FilterContext.js

import React, { createContext, useContext, useState } from 'react';
import MenuData from '../data/MenuData';

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);
const ITEMS_PER_PAGE = 6;
const FilterProvider = ({ children }) => {
  const menu = MenuData;
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(500);
  const [minRating, setMinRating] = useState(4);
  const [maxRating, setMaxRating] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const priceRanges = [
    { id: 1, label: '$50 - $100', min: 50, max: 100 },
    { id: 2, label: '$100 - $200', min: 100, max: 200 },
    { id: 3, label: '$200 - $500', min: 200, max: 500 },
  ];
  // Function to filter menu items based on price range and rating
  const filteredMenu = () => {
    return menu.filter(
      (item) =>
        item.price >= minPrice &&
        item.price <= maxPrice &&
        item.rating >= minRating &&
        item.rating <= maxRating
    );
  };

  // Function to get the total number of pages for pagination
  const getTotalPages = () => {
    return Math.ceil(filteredMenu().length / ITEMS_PER_PAGE);
  };

  // Function to get items for the current page
  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredMenu().slice(startIndex, endIndex);
  };

  const nextPage = () => {
    const totalPages = getTotalPages();
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <FilterContext.Provider
      value={{
        filteredMenu,
        minPrice,
        maxPrice,
        minRating,
        maxRating,
        setMinPrice,
        setMaxPrice,
        setMinRating,
        setMaxRating,
        currentPage,
        nextPage,
        prevPage,
        getTotalPages,
        getCurrentItems,
        priceRanges,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
