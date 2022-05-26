export const InvoiceItemLarge = ({
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
    <div
      className="invoice-item-large"
      style={{ backgroundColor: dark.itemBg, color: dark.txtOffWhite }}
    >
      <p className="invoice-item-name">Name</p>
      <p className="invoice-item-quantity">Quantity</p>
      <p className="invoice-item-price">Price</p>
      <p className="invoice-item-total">Total</p>
      <p className="invoice-item-name">
        <span style={{ color: dark.txtWhite }}>{name}</span>
      </p>
      <p className="invoice-item-quantity">{quantity}</p>
      <p className="invoice-item-price">{price}</p>
      <p className="invoice-item-total">
        <span style={{ color: dark.txtWhite }}>${total.toFixed(2)}</span>
      </p>
    </div>
  );
};
