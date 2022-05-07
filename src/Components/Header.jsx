import { BsFillMoonFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { ReactComponent as Logo } from "../images/logo.svg";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-logo-container">
        <span></span>
        <Logo className="header-logo" />
      </div>
      <div className="header-icon-pic-container">
        <BsFillMoonFill className="icon-moon" />
        <span></span>
        <BsFillPersonFill className="icon-person" />
      </div>
    </div>
  );
};
