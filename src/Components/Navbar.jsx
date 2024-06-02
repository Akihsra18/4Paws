import { Link } from "react-router-dom";
import logo from "../images/LogoColored.png"

export default function NavBarComponent() {
  return (
    <>
      <nav id="PawsNavbar" className="row g-0 navbar navbar-expand-lg navbar-expand-md fixed-top">
        <div className="container-fluid col">
          <Link to="/">
          <img 
            src={logo}
            className="img-fluid" 
            width="100" 
            height="100" 
            alt="Logo"
          />
          </Link>
          <Link className="navbar-brand text-gold text-center col-6" to="/">
            Home ฅ^•ﻌ•^ฅ
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav col-10">
              <li className="nav-item col-6 text-center">
                <Link className="nav-link text-gold" to="/Cats">
                ⋆⭒˚ Cats
                </Link>
              </li>
              <li className="nav-item col-6 text-center">
                <Link className="nav-link text-gold" to="/Dogs">
                Dogs ⋆⭒˚
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
