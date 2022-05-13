import trash from "../images/icon-delete.svg";

export const CreateItemList = () => {
  return (
    <div className="item-list">
      <form className="item-list-grid">
        <div className="item-name">
          <label htmlFor="">Item Name</label>
          <input type="text" />
        </div>
        <div className="item-qty">
          <label htmlFor="">Qty</label>
          <input type="text" />
        </div>
        <div className="item-price">
          <label htmlFor="">Price</label>
          <input type="text" />
        </div>
        <div className="item-total">
          <label htmlFor="">Total</label>
          <input type="text" />
        </div>
        <div className="item-delete">
          <span>{"\u00A0"}</span>
          <img src={trash} alt="delete" />
        </div>
      </form>
    </div>
  );
};
