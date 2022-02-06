import { CodecademyLogoImg } from "Images";
import { BurgerMenuIcon } from "Icons";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__list list">
          <li className="navbar__list-element">
            <a href="" className="navbar__logo link">
              <CodecademyLogoImg className="navbar__logo-svg" />
            </a>
          </li>
          <li className="navbar__list-element">
            <a href="" className="navbar__list-element--login link">
              Log in
            </a>
          </li>
          <li className="navbar__list-element">
            <button className="navbar__menu-btn button" type="button">
              <BurgerMenuIcon className="burger-menu" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
