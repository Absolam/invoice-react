export const CreateBillFrom = ({ newInvoice, setNewInvoice }) => {
  function change(event) {
    const value = event.target.value;

    setNewInvoice((prevState) => ({
      ...prevState,
      id: "12345",
    }));

    setNewInvoice((prevState) => ({
      ...prevState,
      senderAddress: { ...prevState.senderAddress, [event.target.name]: value },
    }));
  }

  return (
    <div className="bill-from">
      <h3 onClick={() => console.log(newInvoice)}>Bill From</h3>
      <form className="bill-from-grid">
        <div className="from-street">
          <label htmlFor="from-street">Street Address</label>
          <input type="text" id="from-street" name="street" onChange={change} />
        </div>
        <div className="from-city">
          <label htmlFor="from-city">City</label>
          <input type="text" id="from-city" name="city" onChange={change} />
        </div>
        <div className="from-post-code">
          <label htmlFor="from-post-code">Post Code</label>
          <input
            type="text"
            id="from-post-code"
            name="postCode"
            onChange={change}
          />
        </div>
        <div className="from-country">
          <label htmlFor="from-country">Country</label>
          <input
            type="text"
            id="from-country"
            name="country"
            onChange={change}
          />
        </div>
      </form>
    </div>
  );
};
