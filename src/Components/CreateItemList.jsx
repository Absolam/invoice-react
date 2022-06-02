import { React, useEffect, useState, useRef } from "react";
import trash from "../images/icon-delete.svg";

export const CreateItemList = ({
  id,
  removeItemList,
  itemValues,
  setItemValues,
  darkMode,
  windowWidth,
  itemList,
}) => {
  let dark = darkMode
    ? {
        darkBg: "#1E2139",
        blackBg: "#141625",
        txtOffWhite: "#DFE3FA",
        txtWhite: "#fff",
        border: "1px solid #252945",
      }
    : "";

  const [total, setTotal] = useState(0);
  const qty = useRef(null);
  const price = useRef(null);

  useEffect(() => {
    setItemValues((prevState) => [...prevState, { id: id }]);
  }, []);

  function remove(id) {
    removeItemList(id);
  }

  function change(event) {
    const value = event.target.value;
    const name = event.target.name;

    if (name === "price" || name === "quantity") {
      setTotal(qty.current.value * price.current.value);
    }

    setItemValues((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [name]: value,
            total: qty.current.value * price.current.value,
          };
        } else return item;
      });
    });
  }

  return (
    <div className="item-list">
      <div className="item-list-grid">
        <div className="item-name">
          <label htmlFor="item-name">Item Name</label>
          <input
            required
            type="text"
            name="name"
            id="item-name"
            onChange={change}
          />
        </div>
        <div className="item-qty">
          <label htmlFor="item-qty">Qty</label>
          <input
            required
            ref={qty}
            type="number"
            name="quantity"
            id="item-qty"
            onChange={change}
          />
        </div>
        <div className="item-price">
          <label htmlFor="item-price">Price</label>
          <input
            required
            ref={price}
            type="number"
            name="price"
            id="item-price"
            onChange={change}
          />
        </div>
        <div className="item-total">
          <label htmlFor="item-total">Total</label>
          <input
            readOnly
            value={total}
            name="total"
            id="item-total"
            onChange={change}
          />
        </div>
        <div
          className={
            itemList.length === 0 ? "item-delete wobble" : "item-delete"
          }
          onClick={() => remove(id)}
        >
          <span>{"\u00A0"}</span>
          <img src={trash} alt="delete" />
        </div>
      </div>
    </div>
  );
};
