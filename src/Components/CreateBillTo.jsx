export const CreateBillTo = () => {
  return (
    <div className="bill-to">
      <h3>Bill To</h3>
      <form className="bill-to-grid">
        <div className="to-name">
          <label htmlFor="to-name">Client's Name</label>
          <input type="text" id="to-name" />
        </div>
        <div className="to-email">
          <label htmlFor="to-email">Client's Email</label>
          <input type="email" id="to-email" />
        </div>
        <div className="to-street">
          <label htmlFor="to-street">Street Address</label>
          <input type="text" id="to-street" />
        </div>
        <div className="to-city">
          <label htmlFor="to-city">City</label>
          <input type="text" id="to-city" />
        </div>
        <div className="to-post-code">
          <label htmlFor="to-post-code">Post Code</label>
          <input type="text" id="to-post-code" />
        </div>
        <div className="to-country">
          <label htmlFor="to-country">Country</label>
          <input type="text" id="to-country" />
        </div>
        <div className="to-date">
          <label htmlFor="to-date">Invoice Date</label>
          <input type="date" id="to-date" />
        </div>
        <div className="to-terms">
          <label htmlFor="to-terms">Payment Terms</label>
          <input type="text" id="to-terms" />
        </div>
      </form>
    </div>
  );
};
