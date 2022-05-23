import { Link } from "react-router-dom";
import { StatusTag } from "./StatusTag";

export const HomeList = ({ listOfInvoices, setCurrentInvoice }) => {
  function getInvoice(id) {
    const selectedInvoice = listOfInvoices.find((invoice) => invoice.id === id);
    setCurrentInvoice(selectedInvoice);
  }

  return (
    <div className="home-list">
      {listOfInvoices.map((invoice) => (
        <Link
          to="/invoice-react/view"
          key={invoice.id}
          onClick={() => getInvoice(invoice.id)}
        >
          <div className="home-list-single">
            <h4>
              <span>#</span>
              {invoice.id}
            </h4>
            <p className="invoice-name">{invoice.clientName}</p>
            <div className="invoice-date-payment">
              <p className="invoice-date">Due {invoice.paymentDue}</p>
              <p className="invoice-total">${invoice.total.toFixed(2)}</p>
            </div>
            <StatusTag status={invoice.status} />
          </div>
        </Link>
      ))}
    </div>
  );
};
