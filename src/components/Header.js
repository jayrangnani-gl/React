import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          <img src={Logo} alt="Shopmate Logo" />
          <span>Logo</span>
        </Link>
        <nav className="navigation">
          <NavLink to="/" className="link" end>Home</NavLink>
          <NavLink to="/cart" className="link">Cart</NavLink>
        </nav>
        <Link to="/cart" className="items">
          <span>Cart: 2</span>
        </Link>
      </header>
    </div>
  );
}    
export default Header;