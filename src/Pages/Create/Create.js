import { useState, useEffect, useRef } from "react";
import { GoBack } from "../../Components/GoBack";
import { GoBackOnPage } from "../../Components/GoBackOnPage";
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
  setListOfInvoices,
  darkMode,
  windowWidth,
  createSideBar,
  setCreateSideBar,
}) => {
  const [itemList, setItemList] = useState([]);

  const [itemValues, setItemValues] = useState([]);

  const [modelOpen, setModelOpen] = useState(false);

  const [finalTotal, setFinalTotal] = useState(0);

  const [defaultTerms, setDefaultTerms] = useState("30 days");

  const [date, setDate] = useState("");

  const myRef = useRef(null);

  const executeScroll = () =>
    myRef.current.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });

  let dark = darkMode
    ? {
        darkBg: "#141625",
        txtOffWhite: "#DFE3FA",
        txtWhite: "#fff",
        darkBgAlt: "#1E2139",
      }
    : "";

  useEffect(() => {
    document.title = "Invoice | Create";
    setModelOpen(false);
    setFinalTotal(0);
    setItemValues([]);
    setDefaultTerms("30 days");
    setItemList([
      <CreateItemList
        key={randomNumber(10000)}
        id={randomNumber(99999)}
        removeItemList={removeItemList}
        setNewInvoice={setNewInvoice}
        itemValues={itemValues}
        setItemValues={setItemValues}
        itemList={itemList}
        darkMode={darkMode}
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
        darkMode={darkMode}
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
    setListOfInvoices((listOfInvoices) => [newInvoice, ...listOfInvoices]);
  }

  function triggerModal(e) {
    e.preventDefault();

    setNewInvoice((prevState) => ({
      ...prevState,
      items: itemValues,
      total: finalTotal,
      paymentDue: calculateDueDate(),
      createdAt: calculateCreated(),
    }));
    setModelOpen(true);
  }

  function calculateCreated() {
    const d = new Date();
    const [month, day, year] = [d.getMonth(), d.getDate(), d.getFullYear()];
    return `${month + 1}/${day}/${year}`;
  }

  function calculateDueDate() {
    const dateAdd = new Date();
    let dateDue;

    if (defaultTerms === "1 day") {
      dateAdd.setDate(dateAdd.getDate() + 1);
      const [month, day, year] = [
        dateAdd.getMonth(),
        dateAdd.getDate(),
        dateAdd.getFullYear(),
      ];
      return (dateDue = `${month + 1}/${day}/${year}`);
    } else if (defaultTerms === "7 days") {
      dateAdd.setDate(dateAdd.getDate() + 7);
      const [month, day, year] = [
        dateAdd.getMonth(),
        dateAdd.getDate(),
        dateAdd.getFullYear(),
      ];
      return (dateDue = `${month + 1}/${day}/${year}`);
    } else if (defaultTerms === "14 days") {
      dateAdd.setDate(dateAdd.getDate() + 14);
      const [month, day, year] = [
        dateAdd.getMonth(),
        dateAdd.getDate(),
        dateAdd.getFullYear(),
      ];
      return (dateDue = `${month + 1}/${day}/${year}`);
    } else if (defaultTerms === "30 days") {
      dateAdd.setDate(dateAdd.getDate() + 30);
      const [month, day, year] = [
        dateAdd.getMonth(),
        dateAdd.getDate(),
        dateAdd.getFullYear(),
      ];
      return (dateDue = `${month + 1}/${day}/${year}`);
    }
  }

  function loopTotal() {
    let grabVaules = itemValues.map((item) => item.total);
    let addValues = grabVaules.reduce(
      (partialSum, grabVaules) => partialSum + grabVaules,
      0
    );
    setFinalTotal(addValues);
  }

  function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  return (
    <form onSubmit={triggerModal} className="create-container">
      {modelOpen && (
        <Modal
          send={send}
          header="Confirm Send"
          text="Are you sure you want to send?"
          darkMode={darkMode}
          refProp={myRef}
          scroll={executeScroll}
        >
          <Button
            text="Cancel"
            clname="button-cancel"
            darkMode={darkMode}
            event={() => setModelOpen(false)}
          />
          <Link to="/invoice-react">
            <Button text="Submit" clname="button-send" event={() => send()} />
          </Link>
        </Modal>
      )}
      <div className="create">
        <GoBack darkMode={darkMode} />
        <h2>New Invoice</h2>
        <CreateBillFrom
          newInvoice={newInvoice}
          setNewInvoice={setNewInvoice}
          darkMode={darkMode}
        />
        <CreateBillTo
          newInvoice={newInvoice}
          setNewInvoice={setNewInvoice}
          date={date}
          setDate={setDate}
          defaultTerms={defaultTerms}
          setDefaultTerms={setDefaultTerms}
          darkMode={darkMode}
        />
        <div className="item-list-array">
          <h3 className="item-list-header">Item List</h3>
          {itemList.map((item) => item)}
          <button type="button" className="add-item" onClick={addItemList}>
            + Add New Item
          </button>
        </div>
        <BottomBar clname="create-bottom-bar" darkMode={darkMode}>
          <Link to="/invoice-react">
            <Button
              text="Discard"
              clname="create-discard-button"
              darkMode={darkMode}
            />
          </Link>
          <Button
            text="Save & Send"
            clname="create-save-button"
            type="submit"
            event={loopTotal}
          />
        </BottomBar>
      </div>
    </form>
  );
};
