/**
 * Company Name - Canberra Health Services
 * Project Name: Feasibility Modelling for Clinical Trials
 * Author: Saurabh Vilas Ghag
 * Version: 1.0.0
 * Date: 23 May 2023
 */

import './Dashboardcontent.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const FeasibilityForm2 = () => 

{
  // Declare state variables
    const [selectedOption, setSelectedOption] = useState("");

    // Project Details
    const [projectId, setProjectId] = useState("");
    const [studyTitle, setstudyTitle] = useState("");
    const [protocolNumber, setprotocolNumber] = useState("");
    const [unitName, setunitName] = useState("");
    const [principalInvestigator, setprincipalInvestigator] = useState("");
    const [studyCoordinator, setstudyCoordinator] = useState("");
    const [studyDuration, setstudyDuration] = useState("");
    const [FundingSource, setFundingSource] = useState("");
    const navigate = useNavigate();

// Pharmacy
const[Standardofcare, setStandardofcare] = useState("");
const [NonStandardofcare, setNonStandardofcare] = useState("");
const [ProtocolHandbook, setProtocolHandbook] = useState("");
const [PharmacyManual, setPharmacyManual] = useState("");
const [Inventory, setInventory] = useState("");
const [Accountability, setAccountability] = useState("");
const [onsite, setonsite] = useState("");
const [Shipping, setShipping] = useState("");
const [Storagespace, setStoragespace] = useState("");
const [Separateisolation, setSeparateisolation] = useState("");
const [StorageEquipment, setStorageEquipment] = useState("");
const [specialequipment, setspecialequipment] = useState("");
// Pathology
const[pathologyselection, setpathologyselection] = useState("");
const [ProtocolHandbookpathology, setProtocolHandbookpathology] = useState("");
    const [LaboratoryManual, setLaboratoryManual] = useState("");
    const [Testingpathology, setTestingpathology] = useState("");
    const [Storagepathology, setStoragepathology] = useState("");
    const [Shippingpathology, setShippingpathology] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    
    {
        // Post data to server using axios
      axios.post('http://localhost:8082/homepage', { selectedOption,projectId,studyTitle,protocolNumber,unitName,principalInvestigator,studyCoordinator,studyDuration,
      FundingSource,Standardofcare,NonStandardofcare,ProtocolHandbook,PharmacyManual,Inventory,Accountability,onsite,Shipping,Storagespace,
      Separateisolation,StorageEquipment,specialequipment,pathologyselection,ProtocolHandbookpathology,LaboratoryManual,Testingpathology,Storagepathology,Shippingpathology })

      .then(res => {
        navigate('/homepage');// Navigate to homepage upon successful submission
      })
      .catch(err => console.log(err));
    }
        
        e.target.reset();
        setProjectId('');
        setstudyTitle('');
        setprotocolNumber('');
        setunitName('');
        setprincipalInvestigator('');
        setstudyCoordinator('');
        setstudyDuration('');
        setFundingSource('');
        console.log(selectedOption,projectId,studyTitle,protocolNumber,unitName,principalInvestigator,studyCoordinator,studyDuration,
            FundingSource,Standardofcare,NonStandardofcare,ProtocolHandbook,PharmacyManual,Inventory,Accountability,onsite,Shipping,Storagespace,
            Separateisolation,StorageEquipment,specialequipment,pathologyselection,ProtocolHandbookpathology,LaboratoryManual,Testingpathology,Storagepathology,Shippingpathology);
      };
      

// Handle selection in dropdown menu

    const handleSelection = (e) => {
      setSelectedOption(e.target.value);// Update the state based on the selected option
    };
  // Conditionally render additional fields based on the selected option
    const showFields =
      selectedOption === "Central Lab" ? (
        <div>
          <h5>Storage and Shipping Assessment</h5>
          <h6>Storage Management :</h6>
          <div className="form-row">
            <div className="dropdown-column">
              <label htmlFor="Storagepathology">
                During the stated period and with particular specifications, there is access to the storage room and equipment
              </label>
              <select id="Storagepathology" name="Storagepathology" value={Storagepathology} onChange={(e) => setStoragepathology(e.target.value)}>
              <option value="">Select an option</option>
                <option value="Available">Available</option>
                <option value="can be Managed">Can be Managed</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>
          </div>
          <h6>Shipping Management :</h6>
          <div className="form-row">
            <div className="dropdown-column">
              <label htmlFor="Shippingpathology">
                Can offer accountability for the transportation of collected samples.
              </label>
              <select id="Shippingpathology" name="Shippingpathology" value={Shippingpathology} onChange={(e) => setShippingpathology(e.target.value)}>
              <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>
      ) : null;
     

    
// Render the form component
    return (
        
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4>Project Details</h4>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="projectId">Project ID:</label>
              <input  type="number" id="projectId" name="projectId" value={projectId} onChange={(e) => setProjectId(e.target.value)} required />
            </div>
            <div className="form-column">
              <label htmlFor="studyTitle">Study Title:</label>
              <input type="text" id="studyTitle" name="studyTitle" value={studyTitle} onChange={(e) => setstudyTitle(e.target.value)} required />
            </div>
            <div className="form-column">
              <label htmlFor="protocolNumber">Protocol Number:</label>
              <input type="text" id="protocolNumber" name="protocolNumber" value={protocolNumber} onChange={(e) => setprotocolNumber(e.target.value)}required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="unitName">Unit Name:</label>
              <input type="text" id="unitName" name="unitName" value={unitName} onChange={(e) => setunitName(e.target.value)} required />
            </div>
            <div className="form-column">
              <label htmlFor="principalInvestigator">Principal Investigator:</label>
              <input type="text" id="principalInvestigator" name="principalInvestigator" value={principalInvestigator} onChange={(e) => setprincipalInvestigator(e.target.value)} required />
            </div>
            <div className="form-column">
              <label htmlFor="studyCoordinator">Study Coordinator:</label>
              <input type="text" id="studyCoordinator" name="studyCoordinator" value={studyCoordinator} onChange={(e) => setstudyCoordinator(e.target.value)} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="studyDuration">Duration of Study (months):</label>
              <input type="number" id="studyDuration" name="studyDuration" value={studyDuration} onChange={(e) => setstudyDuration(e.target.value)} required />
            </div>
           <div className="dropdown-column">
      <label htmlFor="FundingSource">Funding Source</label>
      <select id="FundingSource" name="FundingSource" value={FundingSource} onChange={(e) => setFundingSource(e.target.value)}>
      <option value="">Select an option</option>
        <option value="Grant">Grant</option>
        <option value="Investigator-led">Investigator led</option>
        <option value="Collaborative-group">Collaborative group</option>
        <option value="Sponsored">Sponsored</option>
      </select>
    </div>
          </div>
  
  
          <h4>Pharmacy</h4>
  <div className="form-row">
    <div className="dropdown-column">
      <label htmlFor="Standardofcare">Standard of care:</label>
      <select id="Standardofcare" name="Standardofcare" value={Standardofcare} onChange={(e) => setStandardofcare(e.target.value)}>
      <option value="">Select an option</option>
        <option value="Business usual process">Business usual process</option>
        <option value="Business unusual process">Business unusual process</option>
        <option value="Not Applicable">Not Applicable</option>
      </select>
    </div>
    <div className="dropdown-column">
      <label htmlFor="NonStandardofcare">Non-Standard of care:</label>
      <select id="NonStandardofcare" name="NonStandardofcare" value={NonStandardofcare} onChange={(e) => setNonStandardofcare(e.target.value)}>
      <option value="">Select an option</option>
        <option value="Business unusual process">Business unusual process</option>
        <option value="Not Applicable">Not Applicable</option>
      </select>
    </div>
  </div>
  
  <h5>General Assessment</h5>
  
  <h6>Rules and Regulations :</h6>
  
  <div className="form-row">
    <div className="dropdown-column">
      <label htmlFor="ProtocolHandbook">Availability of Protocol Handbook</label>
      <select id="ProtocolHandbook" name="ProtocolHandbook" value={ProtocolHandbook} onChange={(e) => setProtocolHandbook(e.target.value)}>
      <option value="">Select an option</option>
        <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select>
    </div>
    <div className="dropdown-column">
      <label htmlFor="PharmacyManual">Availability  of Pharmacy Manual</label>
      <select id="PharmacyManual" name="PharmacyManual" value={PharmacyManual} onChange={(e) => setPharmacyManual(e.target.value)}>
      <option value="">Select an option</option>
      <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select>
    </div>
    <div className="dropdown-column">
      <label htmlFor="Inventory">Inventory control and drug labelling</label>
      <select id="Inventory" name="Inventory" value={Inventory} onChange={(e) => setInventory(e.target.value)} >
      <option value="">Select an option</option>
      <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select>
    </div>
    <div className="dropdown-column">
      <label htmlFor="Accountability">Accountability for handling, distribution and safety</label>
      <select id="Accountability" name="Accountability" value={Accountability} onChange={(e) => setAccountability(e.target.value)}>
      <option value="">Select an option</option>
      <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  </div>
  
  <h5>Destruction of drug Assessment</h5>
  
  <h6>close-out management :</h6>
  
  <div className="form-row">
    <div className="dropdown-column">
      <label htmlFor="onsite">Close-out management onsite</label>
      <select id="onsite" name="onsite" value={onsite} onChange={(e) => setonsite(e.target.value)}>
      <option value="">Select an option</option>
        <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select>
    </div>
    <div className="dropdown-column">
      <label htmlFor="Shipping">Close-out management Shipping</label>
      <select id="Shipping" name="Shipping" value={Shipping} onChange={(e) => setShipping(e.target.value)}>
      <option value="">Select an option</option>
      <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select>
    </div>
    </div>
  
  <h5>Storage Assessment</h5>
  
  <h6>Storage Availability :</h6>
  
  <div className="form-row">
    <div className="dropdown-column">
      <label htmlFor="Storagespace">Storage space available for the particular duration</label>
      <select id="Storagespace" name="Storagespace" value={Storagespace} onChange={(e) => setStoragespace(e.target.value)}>
      <option value="">Select an option</option>
        <option value="Available">Available</option>
        <option value="Can be Managed">Can be Managed</option>
        <option value="Not Available">Not Available</option>
      </select>
    </div>
    <div className="dropdown-column">
      <label htmlFor="Separateisolation">Separate isolation storage space available for critical drug</label>
      <select id="Separateisolation" name="Separateisolation" value={Separateisolation} onChange={(e) => setSeparateisolation(e.target.value)} >
      <option value="">Select an option</option>
      <option value="Available">Available</option>
      <option value="Can be Managed">Can be Managed</option>
        <option value="Not Available">Not Available</option>
      </select>
    </div>
    </div>
  
  <h6>Equipment Management :</h6>
    
  <div className="form-row">
    <div className="dropdown-column">
      <label htmlFor="StorageEquipment">Storage equipment availability as per the drug requirement</label>
      <select id="StorageEquipment" name="StorageEquipment" value={StorageEquipment} onChange={(e) => setStorageEquipment(e.target.value)}>
      <option value="">Select an option</option>
        <option value="Available">Available</option>
        <option value="Can be Managed">Can be Managed</option>
        <option value="Not Available">Not Available</option>
      </select>
    </div>
    <div className="dropdown-column">
      <label htmlFor="specialequipment">Availability of special equipment for critical drug</label>
      <select id="specialequipment" name="specialequipment" value={specialequipment} onChange={(e) => setspecialequipment(e.target.value)}>
      <option value="">Select an option</option>
      <option value="Available">Available</option>
      <option value="Can be Managed">Can be Managed</option>
        <option value="Not Available">Not Available</option>
      </select>
    </div>
    </div>
  

  {/* Pathology */}

  



  <h4>Pathology</h4>
<div>
  <div className="form-row">
    <div className="dropdown-column">
      <label htmlFor="pathologyselection">Where testing needs to be done?:</label>
      <select id="pathologyselection" name="pathologyselection" 
    //   onChange={handleSelection} 
      value={pathologyselection} onChange={(e) => {
        handleSelection(e);
        setpathologyselection(e.target.value);
      }}>
      <option value="">Select an option</option>
        <option value="Central Lab">Central Lab</option>
        <option value="Local Lab">Local Lab</option>
      </select>
    </div>
  </div>
  
  <h5>General Assessment</h5>
  
  <h6>Rules and Regulations :</h6>
  
  <div className="form-row">
    <div className="dropdown-column">
      <label htmlFor="ProtocolHandbookpathology">Availability of Protocol Handbook</label>
      <select id="ProtocolHandbookpathology" name="ProtocolHandbookpathology" value={ProtocolHandbookpathology} onChange={(e) => setProtocolHandbookpathology(e.target.value)}>
      <option value="">Select an option</option>
        <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select>
    </div>
    <div className="dropdown-column">
      <label htmlFor="LaboratoryManual">Availability of Laboratory Manual</label>
      <select id="LaboratoryManual" name="LaboratoryManual" value={LaboratoryManual} onChange={(e) => setLaboratoryManual(e.target.value)}>
      <option value="">Select an option</option>
      <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select>
    </div>
  </div>
      

  <h6>Sample Testing :</h6>

  <div className="form-row">
    <div className="dropdown-column">
      <label htmlFor="Testingpathology">Can process all test mentioned in the form</label>
      <select id="Testingpathology" name="Testingpathology" value={Testingpathology} onChange={(e) => setTestingpathology(e.target.value)}>
      <option value="">Select an option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
    </div>
    {showFields}
</div>
   

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  export default FeasibilityForm2;