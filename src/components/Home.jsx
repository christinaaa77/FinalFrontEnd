import React from 'react';
import './Home.css'; // Import file CSS untuk styling (bisa disesuaikan)
import MyNavbar from './Navbar';

const Home = () => {
  return (
    <>
    <MyNavbar/>
      <div className="welcome-screen">
        <img
          src="src/assets/img/febg.png"
          alt="Welcome"
          className="welcome-image"
        />
        <div className="welcome-text">
          <h1>Selamat Datang di Sulawesi Utara</h1>
          <p>
            Nikmati dan pelajari koleksi menu lezat yang khas dari Sulawesi Utara.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
