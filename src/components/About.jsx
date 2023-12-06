import React from 'react';
import './Home.css'; // Import file CSS untuk styling (bisa disesuaikan)
import MyNavbar from './Navbar';

const Home = () => {
  return (
    <>
    <MyNavbar/>
      <div className="welcome-screen">
        <img
          src="src/assets/img/grupfe.jpg"
          alt="Welcome"
          className="welcome-image"
        />
        <div className="welcome-text">
          <h1>Tentang Kami</h1>
          <p>
            Website ini kami buat untuk memenuhi tugas final project dari kelas Front-End Development Universitas Klabat.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
