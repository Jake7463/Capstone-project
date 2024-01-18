import Chef1 from '../Images/Chef1.jpg'
import Chefs from '../Images/Chefs.jpg'

function About(){
    return(
        <div id="about">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>about text</p>
            <img src={Chef1} type="image/jpeg" alt="pic1"/>
            <img src={Chefs} type="image/jpeg" alt="pic2"/>
        </div>
    )
};

export default About;