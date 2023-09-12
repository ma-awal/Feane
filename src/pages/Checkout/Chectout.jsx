import React from 'react';
import DetailsFrom from '../../commponents/DetailsForm/DetailsFrom';

import CartSummery from '../../commponents/CartSummery/CartSummery';

const Chectout = () => {
  return (
    <main>
      <section className="py-5  ">
        <div className="container">
          <div className="row">
            <DetailsFrom />
            <CartSummery />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Chectout;
