/**
 * Company Name - Canberra Health Services
 * Project Name: Feasibility Modelling for Clinical Trials
 * Author: Saurabh Vilas Ghag
 * Version: 1.0.0
 * Date: 23 May 2023
 */
const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
/**
 * initialize the Express application, enable CORS (Cross-Origin Resource Sharing), parse incoming JSON data, and use body-parser for URL-encoded data.
*/
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
/**
 * This code establishes a connection to the MySQL database by providing the host, username, password, and database name.
*/
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Purpose24@!",
    database: "Feasibility_db"
})
/**
 * This code checks if there is an error while connecting to the MySQL database and logs the status of the connection.
*/
db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
    } else {
      console.log('Connected to MySQL database!');
    }
  });

/**
 *  POST route for /signup where user registration information is received and stored in the database.
 * */

app.post('/signup',(req,res) => {
    console.log('Signup route called');
    const sql = "INSERT INTO login (`firstName`, `lastName`, `email_id`, `password`, `gender`) VALUES (?,?,?,?,?)";
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.password,
        req.body.gender
    ]
    console.log(values);
    db.query(sql,values,(err,data) =>{
if(err){
    return res.json("error");
}
return res.json(values);
    })
})
/*
*POST route for /login where user login information is received, and a database query is executed to check the validity of the login credentials.
*/
app.post('/login',(req,res) => {
    console.log('login route called');
    const sql = "SELECT * FROM login where `email_id` = ? and `password` = ?";
    // console.log(values);
    db.query(sql,[req.body.email,req.body.password],(err,data) =>{
if(err){
    return res.json("error");
}
if(data.length > 0){
return res.json("Successful");
} else {
    return res.json("Failed");
}
    })
})
/*
*GET route for /homepage to retrieve project details from the database and send them as a response.
*/
app.get('/homepage', (_req, res) => {
    console.log('homepage route called for display');
    const sql = "SELECT * FROM project_details";
    db.query(sql, (_err, data) => {
      console.log('SQL query result:', data);
      res.send(data);
    });
  });
  

app.post('/homepage', (req, res) => {
    console.log('feasibility form route called');
    const sql1 = "INSERT INTO project_details (`project_id`, `study_title`, `protocol_number`, `unit_name`, `principal_investigator`, `study_coordinator`, `study_duration`, `funding_source`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values1 = [req.body.projectId, req.body.studyTitle, req.body.protocolNumber, req.body.unitName, req.body.principalInvestigator, req.body.studyCoordinator, req.body.studyDuration, req.body.FundingSource];
    console.log(values1);
    
    const sql2 = "INSERT INTO pharmacy_startup (`project_id`, `standard_of_care`, `non_standard_of_care`, `protocol_handbook`, `pharmacy_manual`, `inventory_drug_control`, `accountability`, `close_out_management_onsite`, `close_out_management_shipping`, `storage_equipment`, `special_equipment`,`StorageEquipment`,`specialequipment`)VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)";
    const values2 = [req.body.projectId, req.body.Standardofcare, req.body.NonStandardofcare, req.body.ProtocolHandbook, req.body.PharmacyManual, req.body.Inventory, req.body.Accountability, req.body.onsite, req.body.Shipping, req.body.Storagespace, req.body.Separateisolation, req.body.StorageEquipment, req.body.specialequipment];
    console.log(values2);
    
    const sql3 = "INSERT INTO pathology_startup (`project_id`, `testing_lab`, `protocol_handbook`, `lab_manual`, `testing_confirmation`, `storage_space`, `accountability_shipping`) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values3 = [req.body.projectId, req.body.pathologyselection, req.body.ProtocolHandbookpathology, req.body.LaboratoryManual, req.body.Testingpathology, req.body.Storagepathology, req.body.Shippingpathology];
    console.log(values3);
    
    Promise.all([
      new Promise((resolve, reject) => {
        db.query(sql1, values1, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      }),
      new Promise((resolve, reject) => {
        db.query(sql2, values2, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      }),
      new Promise((resolve, reject) => {
        db.query(sql3, values3, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      })
    ])
      .then(([
        // data1, data2,
         data]) => {
        res.json([
            // values1, values2, 
            values3]);
      })
      .catch((err) => {
        res.json("error");
      });
  });


  app.get('/project/:id', (req, res) => {
    console.log('Project details route called');
    const sql = "SELECT * FROM Feasibility_dashboard_View WHERE project_id = ?";
    const projectId = req.params.id;
    db.query(sql, projectId, (err, data) => {
      if (err) {
        console.error('Error fetching project details:', err);
        return res.status(500).send('Internal Server Error');
      }
      console.log('Project details:', data);
      return res.json(data);
    });
  });
  
  
  
  
  

app.listen(8082,()=>{
    console.log("listening");
})



