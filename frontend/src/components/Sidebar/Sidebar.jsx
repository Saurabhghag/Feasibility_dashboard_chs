
/**
 * Company Name - Canberra Health Services
 * Project Name: Feasibility Modelling for Clinical Trials
 * Author: Saurabh Vilas Ghag
 * Version: 1.0.0
 * Date: 23 May 2023
 */
import React from 'react';
import Logo from '../../img/cHS.png';
import './Sidebar.css';
import { SidebarData } from '../../reusable/reusable';
import { Link } from 'react-router-dom';
// Renders the sidebar component.
const Sidebar = ({ setSelected, selected }) => {
  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span></span>
      </div>
      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? 'menuItem active' : 'menuItem'}
              key={index}
              onClick={() => setSelected(index)}
            >
              {item.icon && item.icon()}
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
