// import { render } from "@testing-library/react";
import {initializeTimes, updateTimes} from './BookingPage';
import {availableTimes} from './BookingForm';

test('InitializeTimes is set correctly to the proper array', () => {
    const initTimes = ["17:30", "18:00", "18:30", "19:00", "20:00", "20:30"];
    expect(initializeTimes()).toEqual(initTimes);
})

test('updateTimes shows the current state', ()=>{
    const initialState = ["17:30", "18:00", "18:30", "19:00", "20:00", "20:30"];
    const action = { type: "times_by_date" };
    expect(updateTimes(initialState, action)).toEqual(initialState);
  });