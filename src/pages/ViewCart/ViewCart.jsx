import React from 'react';
import PropCard from '../../commponents/PropCard/PropCard';
import img from '../../assets/banner-card.png';
import CartList from '../../commponents/CartList/CartList';

const ViewCart = () => {
  return (
    <main>
      <PropCard
        name={'Your Order'}
        text={'Order food with home delivery or take away'}
        img={img}
      />
      <CartList />
    </main>
  );
};

export default ViewCart;
