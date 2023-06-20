
/**
 * Company Name - Canberra Health Services
 * Project Name: Feasibility Modelling for Clinical Trials
 * Author: Saurabh Vilas Ghag
 * Version: 1.0.0
 * Date: 23 May 2023
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DashboardDisplay.css';
import Card from './Card';

const DashboardDisplay = () => {
  // Declare state variables
  const [projectidlist, setProjectidlist] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  // Define data for the cards
  const CardsData = [
    {
      title: "Pharmacy",
      color: {// Card background color and shadow
        background: "linear-gradient(180deg, #a086ff 0%, #c5b9ff 50%, #e5d6ff 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      details: selectedProjectDetails && (selectedProjectDetails[0]),
      series:[{
           // Card data series for Pharmacy data
        data:[selectedProjectDetails && (selectedProjectDetails[0].Pharmacy_Low_risk_cnt),
        selectedProjectDetails && (selectedProjectDetails[0].Pharmacy_mod_risk_cnt),
        selectedProjectDetails && (selectedProjectDetails[0].Pharmacy_high_risk_cnt)]
      }],
    },
    {
      title: "Pathology",
      color: {
        // Card background color and shadow
        background: "linear-gradient(180deg, #FFB2BD 0%, #FED1D7 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      details: selectedProjectDetails && (selectedProjectDetails[0]),
      series:[{ // Card data series for Pathology data
        data:[selectedProjectDetails && (selectedProjectDetails[0].Pathology_Low_risk_cnt),
        selectedProjectDetails && (selectedProjectDetails[0].Pathology_mod_risk_cnt),
        selectedProjectDetails && (selectedProjectDetails[0].Pathology_high_risk_cnt)]
      }],
    }
  ];
  
// Fetch project IDs on component mount
  useEffect(() => {
    axios.get('http://localhost:8082/homepage')
      .then((response) => {
        setProjectidlist(response.data);
        // console.log(setProjectidlist)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 // Fetch selected project details when project ID changes
  useEffect(() => {
    if (selectedProjectId) {
      axios.get(`http://localhost:8082/project/${selectedProjectId}`)
        .then((response) => {
          setSelectedProjectDetails(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setSelectedProjectDetails(null);
    }
  }, [selectedProjectId]);
 // Handle project ID selection from dropdown
  const handleProjectIdSelect = (event) => {
    const projectId = event.target.value;
    setSelectedProjectId(projectId);
    // console.log(projectId)
  }

  console.log(CardsData.details)
  // Render the DashboardDisplay component
  return (
    <div className='form-border-feasibility' >
        <div className='form-border-feasibility'>
      <h2 className='big'>Select a project:</h2>
      <select onChange={handleProjectIdSelect} style={{ display: 'flex' }}>
        <option value="">Select a project ID</option>
        {projectidlist.map((val) => {
          return <option key={val.project_id} value={val.project_id}>{val.project_id} </option>
        })}
      </select>
      </div>
      {selectedProjectDetails && (
        <>
              
              <div className="Cards-ServiceProvider">
                     {CardsData.map((card, id) => {
                     return(
                    <div className= "container">
                        <Card
                        title={card.title}
                        color={card.color}
                         details={card.details}
                         series={card.series}
                         />
                    </div>
                     )
                    })}
                    </div>
                    <div className='form-border-feasibility'>
                  <h2>Selected Project Details:</h2>
                  <ul>
                      <li>Project ID: {selectedProjectDetails[0].project_id}</li>
                      <li>Study Title: {selectedProjectDetails[0].study_title}</li>
                      <li>Protocol Number: {selectedProjectDetails[0].protocol_number}</li>
                      <li>Unit Name: {selectedProjectDetails[0].unit_name}</li>
                      <li>Principal Investigator: {selectedProjectDetails[0].principal_investigator}</li>
                      <li>Study Coordinator: {selectedProjectDetails[0].study_coordinator}</li>
                      <li>Duration of Study (months): {selectedProjectDetails[0].study_duration}</li>
                      <li>Funding Source: {selectedProjectDetails[0].funding_source}</li>
                  </ul>
              </div>

                  </>
      )}
    </div>
    
  )
}

//Compact card


export default DashboardDisplay;



