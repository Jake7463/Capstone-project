import bruchetta from '../Images/bruchetta.svg'
import lemon from '../Images/lemon dessert.jpg'
import greek from '../Images/greek salad.jpg'

function Specials(){
    return (
        <section id="menu">
            <h1>Specials</h1>
            <button>Online Menu</button>
            <section id="specials">
                <article>
                    <img src={greek} alt="Greek Salad dish"/>
                    <span class="specialsSpan">
                        <h2>Greek Salad</h2>
                        <p class="price">$12.99</p>
                    </span>
                    <p class="text1">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                </article>
                <article>
                    <img src={bruchetta} alt="Bruchetta dish"/>
                    <span class="specialsSpan">
                        <h2>Bruchetta</h2>
                        <p class="price">$ 5.99</p>
                    </span>
                    <p class="text1">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                </article>
                <article>
                    <img src={lemon} alt="Lemon Dessert dish"/>
                    <span class="specialsSpan">
                        <h2>Lemon Dessert</h2>
                        <p class="price">$ 5.00</p>
                    </span>
                    <p class="text1">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                </article>
            </section>
        </section>
    )
};

export default Specials;