// src/LandingPage.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="landing-page">
        <div className="content">
          <h1>Welcome to the Pharmacy Management</h1>
          <p>Discover the amazing features of our products.</p>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Pharmacy Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
