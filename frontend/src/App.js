/**
 * Company Name - Canberra Health Services
 * Project Name: Feasibility Modelling for Clinical Trials
 * Author: Saurabh Vilas Ghag
 * Version: 1.0.0
 * Date: 23 May 2023
 */

import './App.css';
import Login from './Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup';
import Home from './Home';

/**
 * The main component of the application.
 *
 * This component sets up the routing for different paths and renders the corresponding components.
 */
function App() {
  return (
    
    <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/homepage' element={<Home />}></Route>
      
     
    </Routes>
    </BrowserRouter>
  );
}

export default App