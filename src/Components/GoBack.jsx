import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../images/icon-arrow-left.svg";

export const GoBack = ({ darkMode, action }) => {
  let dark = darkMode ? "#fff" : "";
  return (
    <Link className="go-back" to="/invoice-react" onClick={action}>
      <Arrow />
      <p>Go back</p>
    </Link>
  );
};
