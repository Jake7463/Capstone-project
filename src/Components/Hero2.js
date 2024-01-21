import RFood from '../Images/RFood.jpg'

function Hero2(){

    return (
    <div id="hero">
        <div id="texts">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <img src={RFood} type="image/jpeg" alt="hero" width="100px"/>
    </div>
    )
};

export default Hero2;