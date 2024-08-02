import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navBar.css";

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
          <ul className={`main-nav__items ${isActive} ? active : " " `}>
            <li className="main-brand">
              <Link to="/index">RezData</Link>
            </li>
            <li className={dropDown}>
              <Link to="/index">Home</Link>
            </li>
            <li className={dropDown}>
              <Link to="/index">Employees</Link>
            </li>
            <li className={dropDown}>
              <Link to="/index">About</Link>
            </li>
            <li className="main-nav__toggle" onClick={toggle}>
              <span className="main-nav__bars"></span>
            </li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
