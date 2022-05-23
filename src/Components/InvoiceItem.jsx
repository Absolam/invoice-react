export const InvoiceItem = ({ name, quantity, price, darkMode }) => {
  let total = quantity * price;

  let dark = darkMode
    ? { darkBg: "#1E2139", txtOffWhite: "#DFE3FA", txtWhite: "#fff" }
    : "";
  return (
    <div
      className="invoice-item"
      style={{ backgroundColor: dark.darkBg, color: dark.txtOffWhite }}
    >
      <div>
        <p>
          <span style={{ color: dark.txtWhite }}>{name}</span>
        </p>
        <div className="invoice-item-qty-price">
          <p>{`${quantity} x $${price}`}</p>
        </div>
      </div>
      <p>
        <span style={{ color: dark.txtWhite }}>${total.toFixed(2)}</span>
      </p>
    </div>
  );
};
