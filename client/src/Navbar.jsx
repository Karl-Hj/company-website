import { Link, Outlet } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <header className="main-header">
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-brand">
              <Link to="/index">RezData</Link>
            </li>
            <li className="main-nav__item">
              <Link to="/index">Home</Link>
            </li>
            <li className="main-nav__item">
              <Link to="/index">Employees</Link>
            </li>
            <li className="main-nav__item">
              <Link to="/index">About</Link>
            </li>
            <li className="main-nav__toggle">
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
