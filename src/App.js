import {React} from 'react';
import './App.css';
import Home from './Components/Home';
import BookingPage from './Components/BookingPage';
import { Route , Routes } from 'react-router-dom';
import ConfirmedBooking from './Components/ConfirmedBooking';




function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/reservation-page" element={<BookingPage />} />
      <Route path='/confirmation-page' element={<ConfirmedBooking/>} />
    </Routes>
  )
};

export default App;