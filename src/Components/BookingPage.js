import Footer from "./Footer";
import Header from "./Header";
import BookingForm from "./BookingForm";
import { useReducer } from "react";
import BrokenAPIMock from "./BrokenAPIMock";
import ConfirmedBooking from "./ConfirmedBooking";
import { useNavigate } from "react-router-dom";


export function initializeTimes(){
    const date = new Date();
    const timesForToday = BrokenAPIMock().fetchAPI(date);
    return timesForToday;
};
export function updateTimes (state, action) {
    if (action.type === "times_by_date"){
        const date = action.nextDate;
        const times = BrokenAPIMock().fetchAPI(date);
        return times;
    }
    return state;
};

function BookingPage(){
    const navigate = useNavigate();
    

    function change (d){
        dispatch ({
            type: "times_by_date",
            nextDate: d,
        })
    };

    function submitForm(data){
        const bool = BrokenAPIMock().submitAPI(data);
        if (bool){
            navigate("/confirmation-page");
            BrokenAPIMock(data)
        }
    };

    const [availableTimes , dispatch] = useReducer(updateTimes, initializeTimes());

    return(
        <>
            <Header />
            <main>
                <BookingForm availableTimes={availableTimes.map(e => {return <option value={e} key={e}>{e}</option>})} change={change} submitForm={submitForm}/>
            </main>
            {/* <ConfirmedBooking /> */}
            <Footer />
        </>
    )
};

export default BookingPage;