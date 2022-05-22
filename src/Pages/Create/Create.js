import { useState, useEffect } from "react";
import { GoBack } from "../../Components/GoBack";
import { CreateBillFrom } from "../../Components/CreateBillFrom";
import { CreateBillTo } from "../../Components/CreateBillTo";
import { CreateItemList } from "../../Components/CreateItemList";
import { BottomBar } from "../../Components/BottomBar";
import { Button } from "../../Components/Buttons";
import { Link } from "react-router-dom";
import { Modal } from "../../Components/Modal";
import "../Create/index.css";

export const Create = ({
  newInvoice,
  setNewInvoice,
  listOfInvoices,
  setListOfInvoices,
}) => {
  const [itemList, setItemList] = useState([]);

  const [itemValues, setItemValues] = useState([]);

  const [modelOpen, setModelOpen] = useState(false);

  useEffect(() => {
    document.title = "Invoice | Create";
    setItemList([
      <CreateItemList
        key={randomNumber(10000)}
        id={randomNumber(99999)}
        removeItemList={removeItemList}
        setNewInvoice={setNewInvoice}
        itemValues={itemValues}
        setItemValues={setItemValues}
      />,
    ]);
    setNewInvoice((prevState) => ({
      ...prevState,
      id: makeId(),
      status: "Pending",
    }));
  }, []);

  useEffect(() => {
    return () => {
      setNewInvoice("");
    };
  }, []);

  function makeId() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    let first = "";
    let second = "";
    for (let i = 1; i < 7; i++) {
      if (i > 0 && i < 3) {
        first += letters.charAt(Math.floor(Math.random() * 26));
      }
      if (i > 2 && i < 8) {
        second += numbers.charAt(Math.floor(Math.random() * 10));
      }
    }
    return first + second;
  }

  function addItemList() {
    setItemList([
      ...itemList,
      <CreateItemList
        key={randomNumber(10000)}
        id={randomNumber(99999)}
        removeItemList={removeItemList}
        itemValues={itemValues}
        setItemValues={setItemValues}
      />,
    ]);
  }

  function removeItemList(id) {
    if (itemList.length > 0) {
      setItemList((newList) => newList.filter((item) => item.props.id !== id));
    }
    if (itemList.length > 0) {
      setItemValues((newList) => newList.filter((item) => item.id !== id));
    }
  }

  function send() {
    setNewInvoice((prevState) => ({
      ...prevState,
      items: itemValues,
    }));
    setListOfInvoices((listOfInvoices) => [newInvoice, ...listOfInvoices]);
    console.log(itemValues);
    console.log(newInvoice);
  }

  function triggerModal(e) {
    e.preventDefault();
    setModelOpen(true);
  }

  function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  return (
    <form onSubmit={triggerModal}>
      <div className="create">
        {modelOpen && <Modal send={send} />}
        <GoBack />
        <h2 onClick={() => console.log(itemValues)}>New Invoice</h2>
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
          <Link to="/invoice-react">
            <Button text="Discard" clname="create-discard-button" />
          </Link>
          <Button
            text="Save & Send"
            clname="create-save-button"
            type="submit"
          />
        </BottomBar>
      </div>
    </form>
  );
};
