/**
 * Company Name - Canberra Health Services
 * Project Name: Feasibility Modelling for Clinical Trials
 * Author: Saurabh Vilas Ghag
 * Version: 1.0.0
 * Date: 23 May 2023
 */

import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { Dashboard, FeasibilityForm } from './components/Content/Dashboardcontent.jsx';
import './Home.css';


/**
 * The Home component.
 *
 * This component represents the home page of the application.
 * It renders a sidebar and the content based on the selected item.
 */

function Home() {
  const [selected, setSelected] = useState(0);
/**
   * Render the content based on the selected item.
   *
   * This function uses a switch statement to determine which content component to render
   * based on the value of the 'selected' state.
   */
  const renderContent = () => {
    switch (selected) {
      case 0:
        return <Dashboard />;
      case 1:
        return <FeasibilityForm />;
      default:
        return null;
    }
  };

  return (
    <div className="home">
      <div className="home-page">
        <Sidebar setSelected={setSelected} selected={selected} />
        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
}


export default Home;



