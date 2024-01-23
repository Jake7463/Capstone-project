import Footer from "./Footer";
import Header from "./Header";
import Hero2 from "./Hero2";
import BookingForm from "./BookingForm";

function BookingPage(){
    return(
        <>
            <Header />
            <main>
                <Hero2 />
                <BookingForm />
            </main>
            <Footer />
        </>
    )
};

export default BookingPage;