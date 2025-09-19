import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const items = useSelector((state)=>state.cart)
  return (
    <div className="d-flex align-items-center justify-content-between p-3">
        <span><h1>Products</h1></span>
      <div>
        <Link className="navLink m-2 fw-bold text-dark text-decoration-none" to={"/"}>Home</Link>
        <Link className="navLink m-2 fw-bold text-dark text-decoration-none" to={"/cart"}><i className="bi bi-cart-fill"></i>Cart</Link>
        <span className="fw-bold">items:{items.length}</span>
      </div>
    </div>
  );
}

export default Navbar;
