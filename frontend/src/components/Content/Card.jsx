
/**
 * Company Name - Canberra Health Services
 * Project Name: Feasibility Modelling for Clinical Trials
 * Author: Saurabh Vilas Ghag
 * Version: 1.0.0
 * Date: 23 May 2023
 */
import React, { useState,useEffect, useRef} from 'react';
import { motion } from "framer-motion";
import './Card.css';
import ApexCharts from "apexcharts";
const Card = (props) => {
    const [expanded, setExpanded] = useState(false);
    
    const handleExpand = () => {
        setExpanded(!expanded);
    };

    // Check  status
 
//     function setStatus(elementId, statusText, availableClass, canBeManagedClass) {
//         var element = document.getElementById(elementId);
//         console.log('Element ID:', elementId);
// console.log('Status Text:', statusText);

      
        
//         if (element) {
//           if (statusText === 'Available' || statusText === 'Yes'  ) {
//             var classes = availableClass.split(' '); // Split the class names by space
//             for (var i = 0; i < classes.length; i++) {
//               element.classList.add(classes[i]); // Add each class individually
//             }
//           } else if (statusText === 'Can be Managed') {
//             var classes = canBeManagedClass.split(' '); // Split the class names by space
//             for (var i = 0; i < classes.length; i++) {
//               element.classList.add(classes[i]); // Add each class individually
//             }
//           }
//         }
//       }
      
      // Usage:
    //   setStatus('protocol_handbook_pharmacy', document.getElementById('protocol_handbook_pharmacy')?.textContent, 'available', 'can-be-managed');
    //   setStatus('pharmacy_manual', document.getElementById('pharmacy_manual')?.textContent, 'available', 'can-be-managed');
    //   setStatus('inventory_drug_control', document.getElementById('inventory_drug_control')?.textContent, 'available', 'can-be-managed');
    //   setStatus('accountability', document.getElementById('accountability')?.textContent, 'available', 'can-be-managed');
      
    return (
        <motion.div layout onClick={handleExpand}>
            {
                expanded ? (
                    <ExpandedCard param={props} setExpanded={()=>setExpanded(false)} />
                ) : (
                    <OriginalCard param={props} setExpanded={()=>setExpanded(true)}/>
                )
            }
        </motion.div>
    );
}
// Renders an original card component.
function OriginalCard({ param,setExpanded }) {
  

    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            series: param.series,
                chart: {
                type: 'bar',
                height: 200 ,
              },
              plotOptions: {
                bar: {
                  borderRadius: 0.5,
                  horizontal: true,
                  distributed: true,
                }
              },
              colors: ['#1ABC9C', '#F39C12', '#E74C3C'],
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: ['Low Risk', 'Moderate Risk', 'High Risk'
                ]

              }
        }

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();
        return () => {
            chart.destroy();}},[]);
    return (
        <div className="OriginalCard" style={{
            background : param.color.background,
            boxShadow : param.color.boxShadow
        }} >
            <span>{param.title}</span>
            {/* <Chart series={param.series}  option={data.option}/> */}
            <div  ref={chartRef}></div>
            
        </div>
    );
}
/**
 * Renders an expanded card component based on the title property of the param object.
 * If the title is 'Pharmacy', it renders TitleOneCard.
 * If the title is 'Pathology', it renders TitleTwoCard.
 * If the title does not match either, it returns null.
 */
function ExpandedCard({ param}) {
    if (param.title === 'Pharmacy') {
        return <TitleOneCard param={param}/>;
    } else if (param.title === 'Pathology') {
        return <TitleTwoCard param={param}/>;
    } else {
        return null;
    }
}
//Renders an expanded card component for the title 'Pharmacy'.
function TitleOneCard({ param,setExpanded }) {
    return (
        <div className="ExpandedCard" style={{
            background : param.color.background,
            boxShadow : param.color.boxShadow}}>
            <div className="form-container-card">
            <h5 className="big">{param.title}</h5>
            
            <h8 className="big" style={{marginBottom: "10px"}}>General Assessment :</h8>

            <div className="form-border">
            <h8 className="med" style={{marginBottom: "10px"}}>Rules and Regulations :</h8>
        
            <div className="form-row"> 
            <span class="small"><span class="label">Availability of Protocol Handbook:</span> {param.details.protocol_handbook_pharmacy}</span>
            <span class="small"> <span class="label">Availability of Pharmacy Manual:</span> {param.details.pharmacy_manual} </span>
        
            <span class="small"><span class="label">Inventory control and drug labelling:</span>{param.details.inventory_drug_control}</span>
            <span class="small"><span class="label">Accountability for handling, distribution and safety:</span> {param.details.accountability}</span>
            </div>
            </div>
        
            <h8 className="big">Destruction of drug Assessment :</h8>
            <div className="form-border">
            <h8 className="med">Close-out management :</h8>
            <div className="form-row"> 
            <span class="small"> <span class="label">Close-out management onsite: </span>{param.details.close_out_management_onsite} </span>
            <span class="small"><span class="label"> Close-out management Shipping:</span> {param.details.close_out_management_shipping} </span>
            </div>
            </div>
         
            
            <h8 className="big">Storage Assessment :</h8>
            <div className="form-border">
            <h9 className="med"> Storage Availability :</h9>
            
            <div className="form-row"> 
            <span class="small"><span class="label"> Storage space available for the particular duration:</span> {param.details.storage_equipment} </span>
            <span class="small"><span class="label"> Separate isolation storage space available for critical drug:</span> {param.details.special_equipment} </span>
            </div>
            
            <h9 className="med">Equipment Management :</h9>
            
            <div className="form-row"> 
            <span class="small"> <span class="label">Storage equipment availability as per the drug requirement:</span> {param.details.StorageEquipment} </span>
            <span class="small"><span class="label"> Availability of special equipment for critical drug:</span> {param.details.specialequipment} </span>
            </div>
            </div>
            </div>
           
        </div>
    );
}
//Renders an expanded card component for the title 'Pathology'.
function TitleTwoCard({ param,setExpanded }) {
    return (
        <div className="ExpandedCard" style={{
            background : param.color.background,
            boxShadow : param.color.boxShadow}}>
           <div className="form-container-card">
            <h5 className="big">{param.title}</h5>
            
            <h8 className="big" style={{marginBottom: "10px"}}>General Assessment :</h8>

            <div className="form-border">
            <h8 className="med" style={{marginBottom: "10px"}}>Rules and Regulations :</h8>
        
            <div className="form-row"> 
            <span class="small"><span class="label">Availability of Protocol Handbook:</span> {param.details.protocol_handbook_pathology}</span>
            <span class="small"> <span class="label">Availability of Laboratory Manual:</span> {param.details.lab_manual} </span>
            </div>
            <div className="form-border">
            <h8 className="med">Sample Testing :</h8>
            <div className="form-row"> 
            <span class="small"><span class="label">Can process all test mentioned in the form:</span> {param.details.testing_confirmation}</span>
            </div>
            </div>
            </div>
        
         
            
            <h8 className="big">Storage and Shipping Assessment :</h8>
            <div className="form-border">
            <h9 className="med"> Storage Management  :</h9>
            
            <div className="form-row"> 
            <span class="small"><span class="label"> During the stated period and with particular specifications, there is access to the storage room and equipment:</span> {param.details.storage_space} </span>
            </div>
            
            <h9 className="med">Shipping Management :</h9>
            
            <div className="form-row"> 
            <span class="small"> <span class="label">Can offer accountability for the transportation of collected samples:</span> {param.details.accountability_shipping} </span>
            </div>
            </div>
            </div>
           
        </div>
    );
}

export default Card;
