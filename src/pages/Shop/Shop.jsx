import React from 'react';

import PropCard from '../../commponents/PropCard/PropCard';
import FilterProvider from '../../context/FilterContext';
import Filter from '../../commponents/Filter/Filter';
import FilteredItems from '../../commponents/FilteredItems/FilteredItems';
import img from '../../assets/hero_menu.jpg';
const Shop = () => {
  return (
    <main>
      <PropCard
        name="Our Shop"
        text={'Order food with home delivery or take away'}
        img={img}
      />
      <FilterProvider>
        <section className="shop py-3 py-md-5 py-lg-5">
          <div className="container py-3 py-md-5 py-lg-5">
            <div className="row CourseCard   ">
              <Filter />
              <FilteredItems />
            </div>
          </div>
        </section>
      </FilterProvider>
    </main>
  );
};

export default Shop;
