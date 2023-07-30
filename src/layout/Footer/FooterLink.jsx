import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ FooterData }) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-2  ">
        <div className="links single-box ">
          <h4 className="  position-relative">Reservations</h4>
          <p>
            <strong>Phone: </strong>+000 313 577 111
          </p>
          <p>
            <strong>Email: </strong>demo@example.com
          </p>
          {/* <ul className="list-group  ">
            {FooterData[0].links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-2  ">
        <div className="links single-box  ">
          <h4 className="  position-relative">Open Ours</h4>
          <p>Mon - Sat: 10am - 11pm </p>
          <p> Sunday: Closed</p>
          {/* <ul className="list-group">
            {FooterData[1].links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default FooterLink;
