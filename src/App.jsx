import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ListMakanan from './components/ListMakanan';
import Add from './components/AddMakanan';
import About from './components/About';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makanan" element={<ListMakanan />} />
        <Route path="/about" element={<About/>} />
        <Route path="/admin" element={<Add/>} />
      </Routes>
    </Router>
  );
};

export default App;
