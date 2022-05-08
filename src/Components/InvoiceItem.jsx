export const InvoiceItem = ({ name, quantity, price, total }) => {
  return (
    <div className="invoice-item">
      <div>
        <p>
          <span>{name}</span>
        </p>
        <div className="invoice-item-qty-price">
          <p>{`${quantity} x $${price}`}</p>
        </div>
      </div>
      <p>
        <span>${quantity * price}</span>
      </p>
    </div>
  );
};
