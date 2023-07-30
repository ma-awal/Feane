import React from 'react';
import './card.css';

const PropCard = (props) => {
  const { name, text, img } = props;
  const sectionStyle = {
    background: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <section className="All" style={sectionStyle}>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="box  d-flex justify-content-center align-items-center flex-column">
              <h2 className="mb-3">{name}</h2>
              <h4>{text}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropCard;
