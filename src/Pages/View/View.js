import { GoBack } from "../../Components/GoBack";
import { ViewStatus } from "../../Components/ViewStatus";
import { ViewInvoice } from "../../Components/ViewInvoice";
import "../View/index.css";

export const View = ({ currentInvoice }) => {
  return (
    <div className="view">
      <GoBack />
      <ViewStatus currentInvoice={currentInvoice} />
      <ViewInvoice currentInvoice={currentInvoice} />
    </div>
  );
};
