export const PaymentTerms = ({ date, action, actionAlt, darkMode }) => {
  let dark = darkMode
    ? { darkBg: "#1E2139", border: "1px solid #252945", txtWhite: "#fff" }
    : "";

  return (
    <>
      <button
        type="button"
        name="paymentTerms"
        onClick={action}
        onChange={actionAlt}
        style={{
          backgroundColor: dark.darkBg,
          border: dark.border,
          color: dark.txtWhite,
        }}
      >
        {date}
      </button>
    </>
  );
};
