export const PaymentTerms = ({ date, action, actionAlt }) => {
  return (
    <>
      <button
        type="button"
        name="paymentTerms"
        onClick={action}
        onChange={actionAlt}
      >
        {date}
      </button>
    </>
  );
};
