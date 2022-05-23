import { InvoiceItem } from "./InvoiceItem";
import { Modal } from "./Modal";
import { Button } from "./Buttons";
import { Link } from "react-router-dom";

export const ViewInvoice = ({
  currentInvoice,
  deleteInvoice,
  deleteModal,
  setDeleteModal,
  darkMode,
}) => {
  const {
    id,
    description,
    senderAddress,
    createdAt,
    paymentDue,
    clientName,
    clientAddress,
    clientEmail,
    items,
    total,
  } = currentInvoice;

  let dark = darkMode
    ? {
        darkBg: "#1E2139",
        txtOffWhite: "#DFE3FA",
        txtWhite: "#fff",
        blackBg: "#0C0E16",
      }
    : "";

  return (
    <div
      className="view-invoice"
      style={{ backgroundColor: dark.darkBg, color: dark.txtOffWhite }}
    >
      <div>
        <p className="invoice-id">
          #{id && <span style={{ color: dark.txtWhite }}>{id}</span>}
        </p>
        {description && <p>{description}</p>}
      </div>
      <div className="sender-address">
        {senderAddress && <p>{senderAddress.street}</p>}
        {senderAddress && <p>{senderAddress.city}</p>}
        {senderAddress && <p>{senderAddress.postCode}</p>}
        {senderAddress && <p>{senderAddress.country}</p>}
      </div>
      <div className="invoice-date-bill">
        <div className="invoice-dates">
          <div>
            <p>Invoice Date</p>
            <p>
              {createdAt && (
                <span style={{ color: dark.txtWhite }}>{createdAt}</span>
              )}
            </p>
          </div>
          <div>
            <p>Payment Due</p>
            <p>
              {paymentDue && (
                <span style={{ color: dark.txtWhite }}>{paymentDue}</span>
              )}
            </p>
          </div>
        </div>
        <div>
          <p>Bill To</p>
          <p>
            {clientName && (
              <span style={{ color: dark.txtWhite }}>{clientName}</span>
            )}
          </p>
          {clientAddress && <p>{clientAddress.street}</p>}
          {clientAddress && <p>{clientAddress.city}</p>}
          {clientAddress && <p>{clientAddress.postCode}</p>}
          {clientAddress && <p>{clientAddress.country}</p>}
        </div>
      </div>

      <div>
        <p>Sent to</p>
        <p>
          {clientEmail && (
            <span style={{ color: dark.txtWhite }}>{clientEmail}</span>
          )}
        </p>
      </div>
      <div>
        <div className="item-container">
          {items &&
            items.map((item) => (
              <InvoiceItem
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                total={item.quantity * item.price}
                key={`${item.name}${item.price}`}
                darkMode={darkMode}
              />
            ))}
        </div>
        <div
          className="invoice-item-grand-total"
          style={{ backgroundColor: dark.blackBg }}
        >
          <p style={{ color: dark.txtWhite }}>Grand Total</p>
          <p>{total && <span>${total.toFixed(2)}</span>}</p>
        </div>
      </div>
    </div>
  );
};
