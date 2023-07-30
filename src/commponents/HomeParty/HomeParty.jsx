import React from 'react';
import './H-party.css';
import { Link } from 'react-router-dom';

const HomeParty = () => {
  return (
    <section className="H-party py-3 py-md-4 py-lg-5">
      <div className="container d-flex justify-content-center align-items-center  py-3 py-md-4 py-lg-5">
        <div className="box text-center ">
          <h2>Celebrate</h2>
          <h4>a Special Event with us! </h4>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <button className="btn rounded-1 common">
            <Link to="/contact">Contact us</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeParty;
