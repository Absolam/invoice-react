import { React, useEffect, useState, useRef } from "react";
import trash from "../images/icon-delete.svg";

export const CreateItemList = ({
  id,
  removeItemList,
  setNewInvoice,
  itemValues,
  setItemValues,
  itemList,
}) => {
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
          return { ...item, [name]: value };
        } else return item;
      });
    });

    console.log(itemValues);
  }

  return (
    <div className="item-list">
      <div className="item-list-grid">
        <div className="item-name">
          <label htmlFor="" onClick={() => console.log(itemValues)}>
            Item Name
          </label>
          <input type="text" name="name" onChange={change} />
        </div>
        <div className="item-qty">
          <label htmlFor="">Qty</label>
          <input ref={qty} type="number" name="quantity" onChange={change} />
        </div>
        <div className="item-price">
          <label htmlFor="">Price</label>
          <input ref={price} type="number" name="price" onChange={change} />
        </div>
        <div className="item-total">
          <label htmlFor="">Total</label>
          <input readOnly value={total} name="total" onChange={change} />
        </div>
        <div className="item-delete" onClick={() => remove(id)}>
          <span>{"\u00A0"}</span>
          <img src={trash} alt="delete" />
        </div>
      </div>
    </div>
  );
};
