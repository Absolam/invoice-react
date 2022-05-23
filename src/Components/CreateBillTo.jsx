import { useState, useRef, useEffect } from "react";
import { PaymentTerms } from "./PaymentTerms";

export const CreateBillTo = ({
  newInvoice,
  setNewInvoice,
  date,
  setDate,
  defaultTerms,
  setDefaultTerms,
}) => {
  const [termsListActive, setTermsListActive] = useState(false);

  useEffect(() => {
    const d = new Date();
    const [month, day, year] = [d.getMonth(), d.getDate(), d.getFullYear()];
    setDate(`${month + 1}/${day}/${year}`);
  }, []);

  function toggle() {
    setTermsListActive(!termsListActive);
  }

  function changeDefaultTerms(e) {
    const value = e.target.textContent;
    setDefaultTerms(value);
    setNewInvoice((prevState) => ({
      ...prevState,
      PaymentTerms: value,
    }));
  }

  function change(event) {
    const value = event.target.value;

    setNewInvoice((prevState) => ({
      ...prevState,
      clientAddress: { ...prevState.senderAddress, [event.target.name]: value },
    }));
  }

  function changeAlt(event) {
    const value = event.target.value;

    setNewInvoice((prevState) => ({
      ...prevState,
      [event.target.name]: value,
    }));
  }

  return (
    <div className="bill-to">
      <h3>Bill To</h3>
      <div className="bill-to-grid">
        <div className="to-name">
          <label htmlFor="to-name">Client's Name</label>
          <input
            type="text"
            id="to-name"
            name="clientName"
            onChange={changeAlt}
          />
        </div>
        <div className="to-email">
          <label htmlFor="to-email">Client's Email</label>
          <input
            type="email"
            id="to-email"
            name="clientEmail"
            onChange={changeAlt}
          />
        </div>
        <div className="to-street">
          <label htmlFor="to-street">Street Address</label>
          <input type="text" id="to-street" name="street" onChange={change} />
        </div>
        <div className="to-city">
          <label htmlFor="to-city">City</label>
          <input type="text" id="to-city" name="city" onChange={change} />
        </div>
        <div className="to-post-code">
          <label htmlFor="to-post-code">Post Code</label>
          <input
            type="text"
            id="to-post-code"
            name="postCode"
            onChange={change}
          />
        </div>
        <div className="to-country">
          <label htmlFor="to-country">Country</label>
          <input type="text" id="to-country" name="country" onChange={change} />
        </div>
        <div className="to-date">
          <label htmlFor="to-date">Invoice Date</label>
          <input
            readOnly
            type="text"
            id="to-date"
            name="createdAt"
            value={date}
            onChange={changeAlt}
          />
        </div>
        <div className="to-terms">
          <label htmlFor="to-terms">Payment Terms</label>
          <PaymentTerms
            date={defaultTerms}
            action={toggle}
            actionAlt={changeAlt}
            name="paymentTerms"
          />
          {termsListActive && (
            <div className="to-terms-list">
              <PaymentTerms date="1 day" action={changeDefaultTerms} />
              <PaymentTerms date="7 days" action={changeDefaultTerms} />
              <PaymentTerms date="14 days" action={changeDefaultTerms} />
              <PaymentTerms date="30 days" action={changeDefaultTerms} />
            </div>
          )}
        </div>
        <div className="to-desc">
          <label htmlFor="to-desc">Project Description</label>
          <input
            type="text"
            id="to-desc"
            name="description"
            onChange={changeAlt}
          />
        </div>
      </div>
    </div>
  );
};
