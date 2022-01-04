import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <Link className="nav-logo" to="/">Computer World</Link>
      </div>
      <div>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/shop">Shop</Link>
        <Link className="nav-link" to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Nav;