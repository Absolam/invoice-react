import { useEffect } from "react";
import { GoBack } from "../../Components/GoBack";
import { CreateBillFrom } from "../../Components/CreateBillFrom";
import { CreateBillTo } from "../../Components/CreateBillTo";
import { CreateItemList } from "../../Components/CreateItemList";
import { BottomBar } from "../../Components/BottomBar";
import { Button } from "../../Components/Buttons";
import "../Create/index.css";
// import "../../index.css";

export const Create = () => {
  useEffect(() => {
    document.title = "Invoice | Create";
  }, []);

  let test = [1, 2];

  return (
    <div className="create">
      <GoBack />
      <h2>New Invoice</h2>
      <CreateBillFrom />
      <CreateBillTo />
      <div className="item-list-array">
        <h3 className="item-list-header">Item List</h3>
        {test.map((item) => (
          <CreateItemList key={item} />
        ))}
        <button className="add-item">+ Add New Item</button>
      </div>
      <BottomBar clname="create-bottom-bar">
        <Button text="Discard" clname="create-discard-button" />
        <Button text="Save & Send" clname="create-save-button" />
      </BottomBar>
    </div>
  );
};
