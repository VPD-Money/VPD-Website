import React, { Suspense, lazy, useState } from 'react';

import { Link } from 'react-router-dom';
import routes from '../../data/Routes';
import store_info from "../../data/Stores";

const Hamburger = () => {

  return <div id="menuToggle">

          <input id={"menu-checkbox"} type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">

              <div className="close-burger-menu">&#10005;</div>

              <img className={"menu-logo"} src={"/images/main_logo.svg"}/>
              {routes.filter((l) => !l.index).map((l) => (
                  <Link to={l.path}><li>{l.label}</li></Link>
              ))}

              <Link to={"/privacy"}> <label className="menu-privacy-label">Privacy Policy</label> </Link>
              <Link to={"/terms"}> <label>Terms & Conditions</label> </Link>

              <div className="menu-stores">
                  <a href={store_info.appstore}><img src="/images/icons/appstore.svg"/></a>
                  <a href={store_info.playstore}><img src="/images/icons/playstore.svg"/></a>
              </div>

          </ul>

  </div>

};

export default Hamburger;
