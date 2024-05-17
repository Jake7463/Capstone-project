import Footer from "./Footer";
import Header from "./Header";
import BookingForm from "./BookingForm";
import { useReducer } from "react";
import BrokenAPIMock from "./BrokenAPIMock";


export function initializeTimes(){
    const date = new Date();
    const timesForToday = BrokenAPIMock().fetchAPI(date);
    return timesForToday;
};

function BookingPage(){

    function updateTimes (state, action) {
        if (action.type === "times_by_date"){
            const date = action.nextDate;
            const times = BrokenAPIMock().fetchAPI(date);
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