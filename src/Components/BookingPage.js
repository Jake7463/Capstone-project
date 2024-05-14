import Footer from "./Footer";
import Header from "./Header";
import BookingForm from "./BookingForm";
import { useReducer } from "react";

function BookingPage(){
    function updateTimes (state, action) {
        if (action.type === "times_by_date"){
            return state;
        }
        return state;
    };

    function initializeTimes () {
        return ["17:30", "18:00", "18:30", "19:00", "20:00", "20:30"];
    };

    function change (d){
        dispatch ({type: "times_by_date"})
    };

    const [availableTimes , dispatch] = useReducer(updateTimes, initializeTimes());

    return(
        <>
            <Header />
            <main>
                <BookingForm availableTimes={availableTimes} change={change}/>
            </main>
            <Footer />
        </>
    )
};

export default BookingPage;