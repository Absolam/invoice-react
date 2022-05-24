import { BsFillMoonFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { ReactComponent as Logo } from "../images/logo.svg";
import { Link } from "react-router-dom";

export const Header = ({ darkMode, setDarkMode }) => {
  let dark = darkMode ? "#1E2139" : "";

  function setDark() {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.querySelector("body").style.background = "#141625";
      document.documentElement.style.setProperty("--input-auto-text", "white");
    } else {
      document.querySelector("body").style.background = "#f8f8fb";
      document.documentElement.style.setProperty("--input-auto-text", "black");
    }
  }

  return (
    <div className="header" style={{ backgroundColor: dark }}>
      <Link to="/invoice-react" className="header-logo-container">
        <span></span>
        <Logo className="header-logo" />
      </Link>
      <div className="header-icon-pic-container">
        <BsFillMoonFill className="icon-moon" onClick={() => setDark()} />
        <span></span>
        <BsFillPersonFill className="icon-person" />
      </div>
    </div>
  );
};
