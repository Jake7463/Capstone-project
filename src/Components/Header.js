import Logo from '../Images/Logo.svg';

function Header() {
    return (
        <header>
            <img src={Logo} type="image/svg+xml" alt="logo"/>
        </header>
    )
}

export default Header;