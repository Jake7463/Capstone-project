import Footer from "./Footer";
import Header from "./Header";
import BookingForm from "./BookingForm";
import { useReducer } from "react";
import MockBadAPI from "./MockBadAPI";


const dates = [
    ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"],
    ["17:30", "18:00", "18:30", "19:00", "20:00", "21:00"],
    ["17:30",  "19:00", "19:30", "20:00", "21:00"],
    ["17:30", "19:00",  "20:30", "21:00"],
    ["18:00", "18:30", "19:00", "19:30", "20:00"],
    ["17:30",  "18:30", "19:00", "19:30"],
    ["18:00", "18:30", "19:00"],
    ["17:30", "18:00","19:30", "20:00",  "21:00"],
    ["17:30", "18:00", "18:30", "19:00", "19:30", "21:00"],
    ["18:30", "20:30", "21:00"]
];


function fetchAPI (date) {
        const randNum = Math.floor(Math.random()*10);
        const mockTimes = dates[randNum];
        console.log(mockTimes)
        return mockTimes;
};
function submitAPI (data) {
    return true;
};



export function initializeTimes(){
    const date = new Date();
    const timesForToday = fetchAPI(date);
    return timesForToday;
};

function BookingPage(){

    function updateTimes (state, action) {
        if (action.type === "times_by_date"){
            const date = action.nextDate;
            const times = fetchAPI(date);
            return times;
        }
        return state;
    };

    function change (d){
        dispatch ({
            type: "times_by_date",
            nextDate: d,
        })
    };


    const [availableTimes , dispatch] = useReducer(updateTimes, initializeTimes());

    return(
        <>
            <Header />
            <main>
                <BookingForm availableTimes={availableTimes.map(e => {return <option value={e} key={e}>{e}</option>})} change={change}/>
            </main>
            <Footer />
        </>
    )
};

export default BookingPage;