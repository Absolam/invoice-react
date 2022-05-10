import { InvoiceItem } from "./InvoiceItem";

export const ViewInvoice = ({ currentInvoice }) => {
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

  return (
    <div className="view-invoice">
      <div>
        <p className="invoice-id">
          #<span>{id}</span>
        </p>
        <p>{description}</p>
      </div>
      <div className="sender-address">
        <p>{senderAddress.street}</p>
        <p>{senderAddress.city}</p>
        <p>{senderAddress.postCode}</p>
        <p>{senderAddress.country}</p>
      </div>
      <div className="invoice-date-bill">
        <div className="invoice-dates">
          <div>
            <p>Invoice Date</p>
            <p>
              <span>{createdAt}</span>
            </p>
          </div>
          <div>
            <p>Payment Due</p>
            <p>
              <span>{paymentDue}</span>
            </p>
          </div>
        </div>
        <div>
          <p>Bill To</p>
          <p>
            <span>{clientName}</span>
          </p>
          <p>{clientAddress.street}</p>
          <p>{clientAddress.city}</p>
          <p>{clientAddress.postCode}</p>
          <p>{clientAddress.country}</p>
        </div>
      </div>

      <div>
        <p>Sent to</p>
        <p>
          <span>{clientEmail}</span>
        </p>
      </div>
      <div>
        <div className="item-container">
          {items.map((item) => (
            <InvoiceItem
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              total={total}
              key={`${item.name}${item.price}`}
            />
          ))}
        </div>
        <div className="invoice-item-grand-total">
          <p>Grand Total</p>
          <p>
            <span>${total}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
