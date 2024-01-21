import Chef1 from '../Images/Chef1.jpg'
import Chefs from '../Images/Chefs.jpg'

function About(){
    return(
        <div id="about">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Little Lemon brings the vibrant flavors of the Mediterranean to Chicago. Since opening our doors in 2018, we have been committed to serving fresh, high-quality ingredients in a warm and welcoming atmosphere. Our dishes celebrate cuisine spanning the Mediterranean region, from Spain to Greece to North Africa.<br/>The Little Lemon concept was born out of our founders' multi-year culinary trek across southern Europe and northern Africa, where they fell in love with the bright, bold flavors of olive oils, hummus, stuffed grape leaves, grilled vegetables, and more. They paired this inspiration with locally-sourced Midwest ingredients to create a menu focused on scratch-made classics with a modern twist.<br/>We take pride in sourcing ethical, sustainable ingredients and supporting local farmers and purveyors. Our cozy, urban-chic décor provides the perfect place to gather with family and friends over small plates perfect for sharing. We can’t wait for you to join our Little Lemon family!</p>
            <img src={Chef1} id="img1" type="image/jpeg" alt="pic1"/>
            <img src={Chefs} id="img2" type="image/jpeg" alt="pic2"/>
        </div>
    )
};

export default About;