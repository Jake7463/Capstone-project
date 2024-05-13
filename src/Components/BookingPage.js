import Footer from "./Footer";
import Header from "./Header";
import BookingForm from "./BookingForm";

function BookingPage(){
    return(
        <>
            <Header />
            <main>
                <BookingForm />
            </main>
            <Footer />
        </>
    )
};

export default BookingPage;