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
        <p className="invoice-id">#{id && <span>{id}</span>}</p>
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
            <p>{createdAt && <span>{createdAt}</span>}</p>
          </div>
          <div>
            <p>Payment Due</p>
            <p>{paymentDue && <span>{paymentDue}</span>}</p>
          </div>
        </div>
        <div>
          <p>Bill To</p>
          <p>{clientName && <span>{clientName}</span>}</p>
          {clientAddress && <p>{clientAddress.street}</p>}
          {clientAddress && <p>{clientAddress.city}</p>}
          {clientAddress && <p>{clientAddress.postCode}</p>}
          {clientAddress && <p>{clientAddress.country}</p>}
        </div>
      </div>

      <div>
        <p>Sent to</p>
        <p>{clientEmail && <span>{clientEmail}</span>}</p>
      </div>
      <div>
        <div className="item-container">
          {items &&
            items.map((item) => (
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
          <p>{total && <span>${total}</span>}</p>
        </div>
      </div>
    </div>
  );
};
