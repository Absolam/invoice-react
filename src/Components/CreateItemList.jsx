import { React, useEffect } from "react";
import trash from "../images/icon-delete.svg";

export const CreateItemList = ({
  id,
  removeItemList,
  setNewInvoice,
  itemValues,
  setItemValues,
}) => {
  useEffect(() => {
    setItemValues((prevState) => [...prevState, { id: id }]);
  }, []);

  function remove(id) {
    removeItemList(id);
  }

  function change(event) {
    const value = event.target.value;
    const name = event.target.name;

    // setItemValues((prevState) => [
    //   ...prevState,
    //   { [id]: { ...prevState[id], [name]: value, id: id } },
    // ]);

    setItemValues((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        } else return item;
      });
    });
  }

  return (
    <div className="item-list">
      <form className="item-list-grid">
        <div className="item-name">
          <label htmlFor="">Item Name</label>
          <input type="text" name="name" onChange={change} />
        </div>
        <div className="item-qty">
          <label htmlFor="">Qty</label>
          <input type="text" name="quantity" onChange={change} />
        </div>
        <div className="item-price">
          <label htmlFor="">Price</label>
          <input type="text" name="price" onChange={change} />
        </div>
        <div className="item-total">
          <label htmlFor="">Total</label>
          <input type="text" name="total" onChange={change} />
        </div>
        <div className="item-delete" onClick={() => remove(id)}>
          <span>{"\u00A0"}</span>
          <img src={trash} alt="delete" />
        </div>
      </form>
    </div>
  );
};
