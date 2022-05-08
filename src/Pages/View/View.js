import { GoBack } from "../../Components/GoBack";
import { ViewStatus } from "../../Components/ViewStatus";
import { ViewInvoice } from "../../Components/ViewInvoice";
import { BottomBar } from "../../Components/BottomBar";
import { Button } from "../../Components/Buttons";
import "../View/index.css";
import { Link } from "react-router-dom";

export const View = ({ currentInvoice }) => {
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
        <Link to="/">
          <Button text="Delete" clname="button-delete" />
        </Link>
        <Link to="/">
          <Button text="Mark as Paid" clname="button-mark" />
        </Link>
      </BottomBar>
    </div>
  );
};
