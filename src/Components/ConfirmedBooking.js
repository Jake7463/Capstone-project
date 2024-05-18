import Footer from './Footer'
import Header from './Header'


const style4Section = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#495e57",
    color: "#f4ce14",
    marginTop: "8%",
    marginBottom: "8%",
    marginLeft: "25%",
    marginRight: "25%",
    paddingTop: "50px",
    paddingBottom: "50px",
    borderRadius: "40px",

}

function ConfirmedBooking(data){
    const p = 'Thank you, we are looking forward to hosting you!';
    // const date = data[0];
    // const time = data[1];
    // const sitting = data[2];
    // const diners = data[3];
    // const occasion = data[4];
    // const comment = data[5];
    // const sittingText = sitting ? "Sitting: "+toString(sitting) : "Sitting: Not specified";
    // const occasionText = occasion ? "Occasion: "+occasion: "Occasion: Not specified";
    // const commentText = comment ? "Comment added: "+comment: "No comment left"


    return(
        <>
            <Header />
            <main>
                <section style={style4Section}>
                    <h1>Your reservation has been successfuly submited!</h1>
                    <p>{p}</p>
                    {/* <p>Details:<br/> Date: {date}<br/>Time: {time}<br/>Diners: {diners}<br/>{sittingText}<br/>{occasionText}<br/>{commentText}</p> */}
                </section>
            </main>
            <Footer />
        </>
    )
}

export function confirmDetails(data){

}

export default ConfirmedBooking;