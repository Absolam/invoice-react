import { BsFillMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { ReactComponent as Logo } from "../images/logo.svg";
import { Link } from "react-router-dom";

export const Header = ({ darkMode, setDarkMode }) => {
  let dark = darkMode ? "#1E2139" : "";

  function setDark() {
    if (darkMode === false) {
      // SET TO DARK
      setDarkMode(true);
      document.querySelector("body").style.background = "#141625";
      document.documentElement.style.setProperty("--input-auto-text", "white");
      document.documentElement.style.setProperty("--input-bg", "#1e2139");
      document.documentElement.style.setProperty("--input-text", "#fff");
      document.documentElement.style.setProperty("--input-border", "#252945");
      document.documentElement.style.setProperty("--box-shadow", "#00000040");
      document.documentElement.style.setProperty("--header-bg", "#1E2139");
      document.documentElement.style.setProperty("--text-color-swap", "#fff");
      document.documentElement.style.setProperty(
        "--light-text-color-swap",
        "#dfe3fa"
      );
      document.documentElement.style.setProperty("--home-list-bg", "#1e2139");
      document.documentElement.style.setProperty("--view-item-bg", "#000");
      document.documentElement.style.setProperty(
        "--view-item-single-bg",
        "#252945"
      );
      document.documentElement.style.setProperty("--create-bg", "#141625");
      document.documentElement.style.setProperty("--add-new-bg", "#252945");
      document.documentElement.style.setProperty("--discard-color", "#dfe3fa");
      document.documentElement.style.setProperty("--discard-bg", "#252945");
      document.documentElement.style.setProperty("--bottom-bar-bg", "#1e2139");
      localStorage.setItem("theme", JSON.stringify(true));
    } else {
      // SET TO LIGHT
      setDarkMode(false);
      document.querySelector("body").style.background = "#f8f8fb";
      document.documentElement.style.setProperty("--input-auto-text", "black");
      document.documentElement.style.setProperty("--input-bg", "#fff");
      document.documentElement.style.setProperty("--input-text", "#000");
      document.documentElement.style.setProperty("--input-border", "#dfe3fa");
      document.documentElement.style.setProperty("--box-shadow", "#48549f40");
      document.documentElement.style.setProperty("--header-bg", "#373B53");
      document.documentElement.style.setProperty("--text-color-swap", "#000");
      document.documentElement.style.setProperty(
        "--light-text-color-swap",
        "#888EB0"
      );
      document.documentElement.style.setProperty("--home-list-bg", "#fff");
      document.documentElement.style.setProperty("--view-item-bg", "#373B53");
      document.documentElement.style.setProperty(
        "--view-item-single-bg",
        "#F9FAFE"
      );
      document.documentElement.style.setProperty("--create-bg", "#fff");
      document.documentElement.style.setProperty("--add-new-bg", "#F9FAFE");
      document.documentElement.style.setProperty("--discard-color", "#7E88C3");
      document.documentElement.style.setProperty("--discard-bg", "#F9FAFE");
      document.documentElement.style.setProperty("--bottom-bar-bg", "#fff");
      localStorage.setItem("theme", JSON.stringify(false));
    }
  }

  return (
    <div className="header-container">
      <div className="header">
        <Link to="/invoice-react" className="header-logo-container">
          <span></span>
          <Logo className="header-logo" />
        </Link>
        <div className="header-icon-pic-container">
          {!darkMode && (
            <BsFillMoonFill className="icon-moon" onClick={() => setDark()} />
          )}
          {darkMode && (
            <BsSunFill className="icon-moon" onClick={() => setDark()} />
          )}
          <span></span>
          <BsFillPersonFill
            className="icon-person wobble"
            onClick={() => localStorage.clear()}
          />
        </div>
      </div>
    </div>
  );
};
