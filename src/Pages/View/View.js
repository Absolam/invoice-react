import { GoBack } from "../../Components/GoBack";
import { ViewStatus } from "../../Components/ViewStatus";
import { ViewInvoice } from "../../Components/ViewInvoice";
import { BottomBar } from "../../Components/BottomBar";
import { Button } from "../../Components/Buttons";
import "../View/index.css";
import { Link } from "react-router-dom";

export const View = ({ currentInvoice, listOfInvoices, setListOfInvoices }) => {
  function deleteInvoice(id) {
    const newList = listOfInvoices.filter((invoice) => invoice.id !== id);
    setListOfInvoices(newList);
  }

  function markPaid(id) {
    const grabInvoice = listOfInvoices.filter((invoice) => invoice.id == id);
    const newList = listOfInvoices.filter((invoice) => invoice.id !== id);
    grabInvoice[0].status = "Paid";
    newList.unshift(grabInvoice[0]);
    setListOfInvoices(newList);
  }

  return (
    <div>
      <div className="view">
        <GoBack />
        <ViewStatus currentInvoice={currentInvoice} />
        <ViewInvoice currentInvoice={currentInvoice} />
      </div>
      <BottomBar>
        <Link to="/edit">
          <Button text="Edit" clname="button-edit" />
        </Link>
        <Link onClick={() => deleteInvoice(currentInvoice.id)} to="/">
          <Button text="Delete" clname="button-delete" />
        </Link>
        <Link onClick={() => markPaid(currentInvoice.id)} to="/">
          <Button text="Mark as Paid" clname="button-mark" />
        </Link>
      </BottomBar>
    </div>
  );
};
