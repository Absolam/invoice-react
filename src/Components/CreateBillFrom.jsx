export const CreateBillFrom = () => {
  return (
    <div className="bill-from">
      <h3>Bill From</h3>
      <form className="bill-from-grid">
        <div className="from-street">
          <label htmlFor="from-street">Street Address</label>
          <input type="text" id="from-street" />
        </div>
        <div className="from-city">
          <label htmlFor="from-city">City</label>
          <input type="text" id="from-city" />
        </div>
        <div className="from-post-code">
          <label htmlFor="from-post-code">Post Code</label>
          <input type="text" id="from-post-code" />
        </div>
        <div className="from-country">
          <label htmlFor="from-country">Country</label>
          <input type="text" id="from-country" />
        </div>
      </form>
    </div>
  );
};
