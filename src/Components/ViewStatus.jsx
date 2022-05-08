import { StatusTag } from "./StatusTag";

export const ViewStatus = ({ currentInvoice }) => {
  return (
    <div className="view-status-container">
      <p>Status</p>
      <StatusTag status={currentInvoice.status} />
    </div>
  );
};
