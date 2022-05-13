import { useEffect } from "react";
import { GoBack } from "../../Components/GoBack";
import { CreateBillFrom } from "../../Components/CreateBillFrom";
import { CreateBillTo } from "../../Components/CreateBillTo";
import { CreateItemList } from "../../Components/CreateItemList";
import { BottomBar } from "../../Components/BottomBar";
import { Button } from "../../Components/Buttons";
import { Link } from "react-router-dom";
import "../Create/index.css";
// import "../../index.css";

export const Create = ({
  newInvoice,
  setNewInvoice,
  listOfInvoices,
  setListOfInvoices,
}) => {
  useEffect(() => {
    document.title = "Invoice | Create";
  }, []);

  let test = [1, 2];

  function send() {
    setListOfInvoices((listOfInvoices) => [newInvoice, ...listOfInvoices]);
    console.log(listOfInvoices);
  }

  return (
    <div className="create">
      <GoBack />
      <h2>New Invoice</h2>
      <CreateBillFrom newInvoice={newInvoice} setNewInvoice={setNewInvoice} />
      <CreateBillTo newInvoice={newInvoice} setNewInvoice={setNewInvoice} />
      <div className="item-list-array">
        <h3 className="item-list-header">Item List</h3>
        {test.map((item) => (
          <CreateItemList key={item} />
        ))}
        <button className="add-item">+ Add New Item</button>
      </div>
      <BottomBar clname="create-bottom-bar">
        <Button text="Discard" clname="create-discard-button" />
        <Link to="/">
          <Button text="Save & Send" clname="create-save-button" event={send} />
        </Link>
      </BottomBar>
    </div>
  );
};
