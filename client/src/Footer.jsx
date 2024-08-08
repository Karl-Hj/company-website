import { Link } from "react-router-dom";
import "./navbar-footer.css";

export function Footer() {
  return (
    <>
      <footer className="main-footer">
        <nav>
          <ul className="main-footer__links">
            <li className="main-footer__link">
              <Link to="about">Support</Link>
            </li>
            <li className="main-footer__link">
              <Link to="about">Terms of use</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
