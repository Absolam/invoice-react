import { BsFillMoonFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { ReactComponent as Logo } from "../images/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header-logo-container">
        <span></span>
        <Logo className="header-logo" />
      </Link>
      <div className="header-icon-pic-container">
        <BsFillMoonFill className="icon-moon" />
        <span></span>
        <BsFillPersonFill className="icon-person" />
      </div>
    </div>
  );
};
