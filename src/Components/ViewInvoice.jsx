import { InvoiceItem } from "./InvoiceItem";
import { InvoiceItemLarge } from "./InvoiceItemLarge";
import { Modal } from "./Modal";
import { Button } from "./Buttons";
import { Link } from "react-router-dom";

export const ViewInvoice = ({
  currentInvoice,
  deleteInvoice,
  deleteModal,
  setDeleteModal,
  darkMode,
  windowWidth,
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
    <div className="view-invoice">
      <div className="invoice-id-desc-sender-address">
        <div className="invoice-id-desc">
          <p className="invoice-id">#{id && <span>{id}</span>}</p>
          {description && <p>{description}</p>}
        </div>
        <div className="sender-address">
          {senderAddress && <p>{senderAddress.street}</p>}
          {senderAddress && <p>{senderAddress.city}</p>}
          {senderAddress && <p>{senderAddress.postCode}</p>}
          {senderAddress && <p>{senderAddress.country}</p>}
        </div>
      </div>
      <div className="invoice-date-bill">
        <div className="invoice-dates">
          <div>
            <p>Invoice Date</p>
            <p>{createdAt && <span>{createdAt}</span>}</p>
          </div>
          <div>
            <p>Payment Due</p>
            <p>{paymentDue && <span>{paymentDue}</span>}</p>
          </div>
        </div>
        <div className="view-bill-to">
          <p>Bill To</p>
          <p>{clientName && <span>{clientName}</span>}</p>
          {clientAddress && <p>{clientAddress.street}</p>}
          {clientAddress && <p>{clientAddress.city}</p>}
          {clientAddress && <p>{clientAddress.postCode}</p>}
          {clientAddress && <p>{clientAddress.country}</p>}
        </div>

        <div className="view-sent-to">
          <p>Sent to</p>
          <p>{clientEmail && <span>{clientEmail}</span>}</p>
        </div>
      </div>
      <div className="view-item-container">
        <div className="item-container">
          {windowWidth > 668 && (
            <div className="item-container-headers">
              <p className="invoice-item-name">Name</p>
              <p className="invoice-item-quantity">Quantity</p>
              <p className="invoice-item-price">Price</p>
              <p className="invoice-item-total">Total</p>
            </div>
          )}
          {items &&
            items.map((item) => (
              <InvoiceItem
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                total={item.quantity * item.price}
                key={`${item.name}${item.price}`}
                darkMode={darkMode}
                windowWidth={windowWidth}
              />
            ))}
        </div>

        <div className="invoice-item-grand-total">
          <p>Grand Total</p>
          <p>{total && <span>${total.toFixed(2)}</span>}</p>
        </div>
      </div>
    </div>
  );
};
