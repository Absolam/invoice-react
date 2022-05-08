import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../images/icon-arrow-left.svg";

export const GoBack = () => {
  return (
    <Link className="go-back" to="/">
      <Arrow />
      <p>Go back</p>
    </Link>
  );
};
