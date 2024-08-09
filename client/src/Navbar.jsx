import { useState } from "react";
import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "./Footer";

import "./navbar-footer.css";
export function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const dropDown = isActive ? "main-nav__item active" : "main-nav__item";

  return (
    <>
      <header className="main-header">
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-brand">
              <Link to="home">RezData</Link>
            </li>
            <li className={dropDown}>
              <Link to="home">Home</Link>
            </li>
            <li className={dropDown}>
              <Link to="employees">Employees</Link>
            </li>
            <li className={dropDown}>
              <Link to="/about">About</Link>
            </li>
            <li className="main-nav__toggle" onClick={toggle}>
              <span className="main-nav__bars"></span>
            </li>
          </ul>
        </nav>
      </header>
      <ScrollRestoration />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
