import Footer from "./Footer";
import Header from "./Header";
import BookingForm from "./BookingForm";

function BookingPage({availableTimes}){
    return(
        <>
            <Header />
            <main>
                <BookingForm availableTimes={availableTimes}/>
            </main>
            <Footer />
        </>
    )
};

export default BookingPage;