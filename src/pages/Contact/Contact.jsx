import React from 'react';
import ContactForm from '../../commponents/ContactFrom/ContactForm';
import ContactInfo from '../../commponents/ContactInfo/ContactInfo';
import PropCard from '../../commponents/PropCard/PropCard';
import img from '../../assets/hero_general.jpg';
const Contact = () => {
  return (
    <main>
      <PropCard
        name={'Contact Us'}
        text={'The best experience have ever'}
        img={img}
      />
      <section className="contact py-3 py-md-4 py-lg-5  ">
        <div className="container py-3 py-md-4 py-lg-5">
          <div className="row justify-content-center gap-3">
            <div className="col-10 col-lg-5  ">
              <ContactForm />
            </div>
            <div className="col-10 col-lg-5 ">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
