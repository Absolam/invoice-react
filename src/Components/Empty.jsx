import { ReactComponent as IconEmpty } from "../images/illustration-empty.svg";

export const Empty = () => {
  return (
    <div className="empty-container">
      <IconEmpty className="icon-empty" />
      <div className="empty-text">
        <h3>There is nothing here</h3>
        <p>
          Create an invoice by clicking the <span>New</span> button and get
          started
        </p>
      </div>
    </div>
  );
};
