import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../images/icon-arrow-left.svg";

export const GoBack = () => {
  return (
    <Link className="go-back" to="/invoice-react">
      <Arrow />
      <p>Go back</p>
    </Link>
  );
};
