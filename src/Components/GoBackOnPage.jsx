import { ReactComponent as Arrow } from "../images/icon-arrow-left.svg";

export const GoBackOnPage = ({ darkMode, action }) => {
  let dark = darkMode ? "#fff" : "";
  return (
    <div className="go-back" onClick={action}>
      <Arrow />
      <p style={{ color: dark }}>Go back</p>
    </div>
  );
};
