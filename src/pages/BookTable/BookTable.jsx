import React from 'react';

import PropCard from '../../commponents/PropCard/PropCard';
import img from '../../assets/hero_general.jpg';
import HomeOrder from '../../commponents/HomeOrder/HomeOrder';
const BookTable = () => {
  return (
    <main>
      <PropCard
        name={'Book A Table'}
        text={'The best experience have ever'}
        img={img}
      />
      <section className="Book-table   ">
        <HomeOrder />
      </section>
    </main>
  );
};

export default BookTable;
