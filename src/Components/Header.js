import Logo from '../Images/Logo.svg';
import Nav from '../Components/Nav'

function Header() {
    return (
        <header>
            <img src={Logo} type="image/svg+xml" alt="logo"/>
            <Nav />
        </header>
    )
}

export default Header;