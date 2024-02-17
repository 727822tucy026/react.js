import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import ForgetPassword from './ForgetPassword';
import About from './About';
import ProductComparison from './Medicines';

import NavBar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />}/>
        <Route path='/App' element={<App />} />
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/ForgetPassword' element={<ForgetPassword />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Medicines' element={<ProductComparison />}/>
        
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
