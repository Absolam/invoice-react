export const HomeList = ({ listOfInvoices }) => {
  function status(invoice) {
    if (invoice === "Paid") {
      return "invoice-status--paid";
    } else if (invoice === "Pending") {
      return "invoice-status--pending";
    } else if (invoice === "Draft") {
      return "invoice-status--draft";
    }
  }

  function statusContainer(invoice) {
    if (invoice === "Paid") {
      return "invoice-status-container--paid";
    } else if (invoice === "Pending") {
      return "invoice-status-container--pending";
    } else if (invoice === "Draft") {
      return "invoice-status-container--draft";
    }
  }

  return (
    <div className="home-list">
      {listOfInvoices.map((invoice) => (
        <div className="home-list-single" key={invoice.id}>
          <h4>
            <span>#</span>
            {invoice.id}
          </h4>
          <p className="invoice-name">{invoice.clientName}</p>
          <div className="invoice-date-payment">
            <p className="invoice-date">Due {invoice.paymentDue}</p>
            <p className="invoice-total">${invoice.total}</p>
          </div>
          <div className={statusContainer(invoice.status)}>
            <p className={status(invoice.status)}>
              <p className="invoice-status-circle"></p>
              {invoice.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
