import { useEffect } from "react";
import { GoBack } from "../../Components/GoBack";
import { CreateBillFrom } from "../../Components/CreateBillFrom";
import { CreateBillTo } from "../../Components/CreateBillTo";
import "../Create/index.css";
// import "../../index.css";

export const Create = () => {
  useEffect(() => {
    document.title = "Invoice | Create";
  }, []);

  return (
    <div className="create">
      <GoBack />
      <h2>New Invoice</h2>
      <CreateBillFrom />
      <CreateBillTo />
    </div>
  );
};
