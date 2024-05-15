import { render } from "@testing-library/react";
import {BookingPage, initializeTimes} from './BookingPage';


test('InitializeTimes is set correctly to the proper array', () => {
    render(<BookingPage />);
    const initTimes = ["17:30", "18:00", "18:30", "19:00", "20:00", "20:30"];
    expect(initializeTimes()).toEqual(initTimes);
})