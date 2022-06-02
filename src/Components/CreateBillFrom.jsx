export const CreateBillFrom = ({ newInvoice, setNewInvoice, darkMode }) => {
  let dark = darkMode
    ? {
        darkBg: "#1E2139",
        blackBg: "#141625",
        txtOffWhite: "#DFE3FA",
        txtWhite: "#fff",
        border: "1px solid #252945",
      }
    : "";

  function change(event) {
    const value = event.target.value;

    setNewInvoice((prevState) => ({
      ...prevState,
      senderAddress: { ...prevState.senderAddress, [event.target.name]: value },
    }));
  }

  return (
    <div className="bill-from">
      <h3 onClick={() => console.log(newInvoice)}>Bill From</h3>
      <div className="bill-from-grid">
        <div className="from-street">
          <label htmlFor="from-street">Street Address</label>
          <input
            type="text"
            id="from-street"
            name="street"
            onChange={change}
            required
          />
        </div>
        <div className="from-city">
          <label htmlFor="from-city">City</label>
          <input
            type="text"
            id="from-city"
            name="city"
            onChange={change}
            required
          />
        </div>
        <div className="from-post-code">
          <label htmlFor="from-post-code">Zip Code</label>
          <input
            type="text"
            id="from-post-code"
            name="postCode"
            onChange={change}
            required
          />
        </div>
        <div className="from-country">
          <label htmlFor="from-country">Country</label>
          <input
            type="text"
            id="from-country"
            name="country"
            onChange={change}
            required
          />
        </div>
      </div>
    </div>
  );
};
