import { Link } from "react-router-dom";
import { StatusTag } from "./StatusTag";
import arrow from "../images/icon-arrow-right.svg";

export const HomeList = ({
  listOfInvoices,
  setCurrentInvoice,
  darkMode,
  windowWidth,
}) => {
  function getInvoice(id) {
    const selectedInvoice = listOfInvoices.find((invoice) => invoice.id === id);
    setCurrentInvoice(selectedInvoice);
  }

  let dark = darkMode ? { bgDark: "#1E2139", txtWhite: "#fff" } : "";

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
            {windowWidth > 668 ? (
              <>
                <p className="invoice-date">Due {invoice.paymentDue}</p>
                <p className="invoice-total">${invoice.total.toFixed(2)}</p>
              </>
            ) : (
              <div className="invoice-date-payment">
                <p className="invoice-date">Due {invoice.paymentDue}</p>
                <p className="invoice-total">${invoice.total.toFixed(2)}</p>
              </div>
            )}
            <StatusTag status={invoice.status} />
            {/* <img className="home-list-arrow" src={arrow} alt="" /> */}
          </div>
        </Link>
      ))}
    </div>
  );
};
