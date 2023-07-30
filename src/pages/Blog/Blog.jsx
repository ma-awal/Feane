import React from 'react';
import BlogCard from '../../commponents/BlogCard/BlogCard';
import BlogNews from '../../commponents/BlogNews/BlogNews';
import PropCard from '../../commponents/PropCard/PropCard';
import BlogData from '../../data/BlogData';
import NewsData from '../../data/NewsData';
import img from '../../assets/hero_general.jpg';
const Blog = () => {
  return (
    <main>
      <PropCard
        name={'Foores Blog'}
        text={'Per consequat adolescens ex cu nibh commune'}
        img={img}
      />
      <section className="py-3 py-md-4 my-3 my-md-4 my-lg-5">
        <div className="container">
          <div class="row gy-3 gy-md-4 ">
            <div className="col-12 col-md-8 ">
              <BlogCard data={BlogData} />
            </div>
            <div className="col-12 col-md-4">
              <BlogNews data={NewsData} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
