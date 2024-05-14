import {React, useState} from 'react';
import './App.css';
import Home from './Components/Home';
import BookingPage from './Components/BookingPage';
import { Route , Routes } from 'react-router-dom';




function App() {

  const [availableTimes, setAvailableTimes] = useState(["17:30", "18:00", "18:30", "19:00", "20:00", "20:30"]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/reservation-page" element={<BookingPage availableTimes={availableTimes}/>} />
    </Routes>
  )
};

export default App;