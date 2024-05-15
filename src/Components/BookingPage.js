import Footer from "./Footer";
import Header from "./Header";
import BookingForm from "./BookingForm";
import { useReducer } from "react";

export function updateTimes (state, action) {
    if (action.type === "times_by_date"){
        return state
    }
    return state
};

export function initializeTimes(){
    return ["17:30", "18:00", "18:30", "19:00", "20:00", "20:30"];
};

function BookingPage(){
    
    function change (d){
        dispatch ({type: "times_by_date"})
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