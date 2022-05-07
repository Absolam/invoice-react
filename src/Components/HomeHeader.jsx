import { ReactComponent as Arrow } from "../images/icon-arrow-down.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { Link } from "react-router-dom";

export const HomeHeader = () => {
  function checkInvoices(invoices) {
    if (invoices.length > 0) {
      return `${invoices.length} invoices`;
    } else return "No invoices";
  }

  return (
    <div className="home-header">
      <div className="home-header-status-container">
        <h2>Invoices</h2>
        <h3>No invoices</h3>
      </div>
      <div className="home-header-filter-button-container">
        <div className="home-header-filter-container">
          <h3>Filter</h3>
          <Arrow />
        </div>
        <Link to="/create" className="home-header-button-container">
          <Plus className="icon-plus" />
          <p>New</p>
        </Link>
      </div>
    </div>
  );
};