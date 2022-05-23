export const StatusTag = ({ status, darkMode }) => {
  let dark = darkMode ? "#1E2139" : "";

  function statusClass(invoice) {
    if (invoice === "Paid") {
      return "invoice-status--paid";
    } else if (invoice === "Pending") {
      return "invoice-status--pending";
    } else if (invoice === "Draft") {
      return "invoice-status--draft";
    }
  }

  function statusContainerClass(invoice) {
    if (invoice === "Paid") {
      return "invoice-status-container--paid";
    } else if (invoice === "Pending") {
      return "invoice-status-container--pending";
    } else if (invoice === "Draft") {
      return "invoice-status-container--draft";
    }
  }

  return (
    <div className={statusContainerClass(status)}>
      <div className={statusClass(status)}>
        <p className="invoice-status-circle"></p>
        {status}
      </div>
    </div>
  );
};
