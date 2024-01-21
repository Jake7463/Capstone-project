import male1 from '../Images/male1.jpg'
import female1 from '../Images/female1.jpg'
import female2 from '../Images/female2.jpg'
import star from '../Images/star.jpg'

function Reviews(){
    return (
        <section id="testi">
            <h1>Testimonials</h1>
            <section id="testimonials">
                <article id="testimonial1">
                    <img src={star} id="star" alt="star"/>
                    <img src={star} id="star" alt="star"/>
                    <img src={star} id="star" alt="star"/>
                    <img src={star} id="star" alt="star"/>
                    <img src={star} id="star" alt="star"/>
                    <img src={female1} id="img3" alt="person pic"/>
                    <h2>Name</h2>
                    <p>Review</p>
                </article>
                <article id="testimonial1">
                    <img src={star} id="star" alt="star"/>
                    <img src={star} id="star" alt="star"/>
                    <img src={star} id="star" alt="star"/>
                    <img src={star} id="star" alt="star"/>
                    <img src={star} id="star" alt="star"/>
                    <img src={male1} id="img3" alt="person pic"/>
                    <h2>Name</h2>
                    <p>Review</p>
                </article>
                <article id="testimonial1">
                    <img src={star} id="star" alt="star"/>
                    <img src={star} id="star" alt="star"/>
                    <img src={star} id="star" alt="star"/>
                    <img src={star} id="star" alt="star"/>
                    <img src={star} id="star" alt="star"/>
                    <img src={female2} id="img3" alt="person pic"/>
                    <h2>Name</h2>
                    <p>Review</p>
                </article>
            </section>
        </section>
    )
};

export default Reviews;