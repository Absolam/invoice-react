import { StatusTag } from "./StatusTag";

export const ViewStatus = ({ currentInvoice, darkMode }) => {
  let dark = darkMode ? "#1E2139" : "";

  return (
    <div className="view-status-container" style={{ backgroundColor: dark }}>
      <p>Status</p>
      <StatusTag status={currentInvoice.status} darkMode={darkMode} />
    </div>
  );
};
