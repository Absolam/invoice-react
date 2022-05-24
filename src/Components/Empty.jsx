import { ReactComponent as IconEmpty } from "../images/illustration-empty.svg";

export const Empty = ({ darkMode }) => {
  let dark = darkMode ? { txtWhite: "#fff" } : "";

  return (
    <div className="empty-container">
      <IconEmpty className="icon-empty" />
      <div className="empty-text">
        <h3 style={{ color: dark.txtWhite }}>There is nothing here</h3>
        <p>
          Create an invoice by clicking the <span>New</span> button and get
          started
        </p>
      </div>
    </div>
  );
};
