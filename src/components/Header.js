import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css";
import { useCart } from "../Context/CartContext";

const Header = () => {

  const { cartList } = useCart();

  return (
    <div>
      <header>
        <Link to="/" className="logo">
          <img src={Logo} alt="Shopmate Logo" />
          <span>Ecomerce Context</span>
        </Link>
        <nav className="navigation">
          <NavLink to="/" className="link" end>Home</NavLink>
          <NavLink to="/cart" className="link">Cart</NavLink>
        </nav>
        <Link to="/cart" className="items">
          <span>Cart: {cartList.length}</span>
        </Link>
      </header>
    </div>
  );
}    
export default Header;