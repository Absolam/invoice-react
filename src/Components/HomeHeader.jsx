import { ReactComponent as Arrow } from "../images/icon-arrow-down.svg";
import plus from "../images/icon-plus.svg";
import { Link } from "react-router-dom";

export const HomeHeader = ({
  listOfInvoices,
  darkMode,
  windowWidth,
  createSideBar,
  setCreateSideBar,
}) => {
  function checkInvoices(invoices) {
    if (windowWidth < "668px" && invoices.length > 0) {
      return invoices.length === 1
        ? `There is ${invoices.length} total invoice`
        : `There are ${invoices.length} total invoices`;
    } else if (windowWidth > "668px" && invoices.length > 0) {
      return invoices.length === 1
        ? `There is ${invoices.length} total invoice`
        : `There are ${invoices.length} total invoices`;
    } else if (invoices.length === 0) {
      return "No invoices";
    }
  }

  let dark = darkMode ? "#fff" : "";

  return (
    <div className="home-header" style={{ color: dark }}>
      <div className="home-header-status-container">
        <h2>Invoices</h2>
        <h3 style={{ color: dark }}>{checkInvoices(listOfInvoices)}</h3>
      </div>
      <div className="home-header-filter-button-container">
        {/* <div className="home-header-filter-container">
          <h3>Filter</h3>
          <Arrow />
        </div> */}
        {windowWidth && (
          <Link
            to="/invoice-react/create"
            className="home-header-button-container"
          >
            <img src={plus} alt="" className="icon-plus" />
            {windowWidth > "668px" ? <p>New Invoice</p> : <p>New</p>}
          </Link>
        )}
      </div>
    </div>
  );
};
