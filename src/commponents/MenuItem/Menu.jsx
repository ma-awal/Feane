import React from 'react';
import MenuCard from './MenuCard/MenuCard';
import Categories from './Categories/Categories';
import './Menu.css';
const CourseMenu = () => {
  return (
    <section className="CourseMenu py-3 py-lg-4 py-lg-5 ">
      <div className="container py-3 py-lg-4 py-lg-5">
        <Categories />
        <MenuCard />
      </div>
    </section>
  );
};

export default CourseMenu;
