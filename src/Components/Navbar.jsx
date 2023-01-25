import React from "react";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-body-dark">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className=" ms-4">
                <Link
                  type="button"
                  className="cart_btn btn btn-light  position-relative nav-link me-3"
                  to={"/Cart"}
                >
                  <BsCart />
                  <span className="position-absolute top-0  start-100 translate-middle badge rounded-pill bg-dark">
                    {cartItems.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
