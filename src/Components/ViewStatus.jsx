import { StatusTag } from "./StatusTag";
import { Button } from "./Buttons";
import { Link } from "react-router-dom";

export const ViewStatus = ({
  currentInvoice,
  darkMode,
  windowWidth,
  setDeleteModal,
  markPaid,
}) => {
  let dark = darkMode ? "#1E2139" : "";

  return (
    <div className="view-status-container">
      <p>Status</p>
      <div>
        {windowWidth > 668 ? (
          <div className="view-status-large">
            <StatusTag status={currentInvoice.status} darkMode={darkMode} />
            <Button
              text="Delete"
              clname="button-delete"
              event={() => setDeleteModal(true)}
            />
            <Link
              onClick={() => markPaid(currentInvoice.id)}
              to="/invoice-react"
            >
              <Button text="Mark as Paid" clname="button-mark" />
            </Link>
          </div>
        ) : (
          <StatusTag status={currentInvoice.status} darkMode={darkMode} />
        )}
      </div>
    </div>
  );
};
