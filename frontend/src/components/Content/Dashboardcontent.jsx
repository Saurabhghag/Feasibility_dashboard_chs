/**
 * Company Name - Canberra Health Services
 * Project Name: Feasibility Modelling for Clinical Trials
 * Author: Saurabh Vilas Ghag
 * Version: 1.0.0
 * Date: 23 May 2023
 */
import React from 'react';
import './Dashboardcontent.css';
import FeasibilityForm2 from './FeasibilityForm';
import DashboardDisplay from './DashboardDisplay';


// Dashboard component
const Dashboard = () => {
  
  return (
    <div>
      <h1 className='big-dashboard'>Dashboard</h1>

     
        <DashboardDisplay/>
    
  
    </div>
  );
};
// FeasibilityForm component
const FeasibilityForm = () => {
  return (
    <><h2>Feasibility Form</h2><FeasibilityForm2 /></>
);
};

export { Dashboard, FeasibilityForm };


