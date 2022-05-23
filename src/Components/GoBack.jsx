import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../images/icon-arrow-left.svg";

export const GoBack = ({ darkMode }) => {
  let dark = darkMode ? "#fff" : "";
  return (
    <Link className="go-back" to="/invoice-react">
      <Arrow />
      <p style={{ color: dark }}>Go back</p>
    </Link>
  );
};
