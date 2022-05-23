export const InvoiceItem = ({ name, quantity, price }) => {
  let total = quantity * price;
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
        <span>${total.toFixed(2)}</span>
      </p>
    </div>
  );
};
