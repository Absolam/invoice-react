export const InvoiceItem = ({
  name,
  quantity,
  price,
  darkMode,
  windowWidth,
}) => {
  let total = quantity * price;

  let dark = darkMode
    ? {
        darkBg: "#1E2139",
        txtOffWhite: "#DFE3FA",
        txtWhite: "#fff",
        itemBg: "#252945",
      }
    : "";
  return (
    <div>
      {windowWidth > 668 ? (
        <div className="invoice-item-large">
          <p className="invoice-item-name">
            <span style={{ color: dark.txtWhite }}>{name}</span>
          </p>
          <p className="invoice-item-quantity">{quantity}</p>
          <p className="invoice-item-price">{price}</p>
          <p className="invoice-item-total">
            <span>${total.toFixed(2)}</span>
          </p>
        </div>
      ) : (
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
      )}
    </div>
  );
};
