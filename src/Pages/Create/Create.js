import { useEffect, useId } from "react";
import { useState } from "react";
import { GoBack } from "../../Components/GoBack";
import { CreateBillFrom } from "../../Components/CreateBillFrom";
import { CreateBillTo } from "../../Components/CreateBillTo";
import { CreateItemList } from "../../Components/CreateItemList";
import { BottomBar } from "../../Components/BottomBar";
import { Button } from "../../Components/Buttons";
import { Link } from "react-router-dom";
import "../Create/index.css";

export const Create = ({
  newInvoice,
  setNewInvoice,
  listOfInvoices,
  setListOfInvoices,
}) => {
  const [itemList, setItemList] = useState([]);

  const [itemValues, setItemValues] = useState([]);

  useEffect(() => {
    document.title = "Invoice | Create";
    setItemList([
      <CreateItemList
        key={randomNumber(10000)}
        id={randomNumber(99999)}
        removeItemList={removeItemList}
        setNewInvoice={setNewInvoice}
      />,
    ]);
  }, []);

  function addItemList() {
    setItemList([
      ...itemList,
      <CreateItemList
        key={randomNumber(10000)}
        id={randomNumber(99999)}
        removeItemList={removeItemList}
      />,
    ]);
  }

  function removeItemList(id) {
    if (itemList.length > 0) {
      setItemList((newList) => newList.filter((item) => item.props.id !== id));
    }
  }

  function send() {
    setListOfInvoices((listOfInvoices) => [newInvoice, ...listOfInvoices]);
    console.log(listOfInvoices);
  }

  function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  return (
    <div className="create">
      <GoBack />
      <h2 onClick={() => console.log(newInvoice)}>New Invoice</h2>
      <CreateBillFrom newInvoice={newInvoice} setNewInvoice={setNewInvoice} />
      <CreateBillTo newInvoice={newInvoice} setNewInvoice={setNewInvoice} />
      <div className="item-list-array">
        <h3 className="item-list-header">Item List</h3>
        {itemList.map((item) => item)}
        <button className="add-item" onClick={addItemList}>
          + Add New Item
        </button>
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
