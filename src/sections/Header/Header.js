import "./Header.css";
import logo from "../../assets/images/logo.png";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark p-4">
      <div className="container ">
        <a className="navbar-brand" href="/#">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <NavItem>
              <a className="nav-link active" aria-current="page" href="/#">
                Home
              </a>
            </NavItem>
            <NavItem>
              <Link to={"/browse"} className="nav-link">
                Browse
              </Link>
            </NavItem>
            <NavItem>
              <a className="nav-link" href="/#">
                Details
              </a>
            </NavItem>
            <NavItem>
              <a className="nav-link" href="/#">
                Streams
              </a>
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
