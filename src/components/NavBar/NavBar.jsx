import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "./NavBar.css";
import { useSelector } from "react-redux";

export default function NavBar() {

  const cartProducts = useSelector(state => state.cart);

  return (
    <div className="nav">
      <h1>React Redux Cart</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/cart">
              <BsCart4 size={28} color={"goldenrod"} />
              <span className="cart-count">{cartProducts.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
