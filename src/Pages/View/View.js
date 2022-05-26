import { GoBack } from "../../Components/GoBack";
import { ViewStatus } from "../../Components/ViewStatus";
import { ViewInvoice } from "../../Components/ViewInvoice";
import { BottomBar } from "../../Components/BottomBar";
import { Button } from "../../Components/Buttons";
import "../View/index.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "../../Components/Modal";

export const View = ({
  currentInvoice,
  listOfInvoices,
  setListOfInvoices,
  darkMode,
  windowWidth,
}) => {
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    document.title = "Invoice | View";
  }, []);

  function deleteInvoice(id) {
    const newList = listOfInvoices.filter((invoice) => invoice.id !== id);
    setListOfInvoices(newList);
  }

  function markPaid(id) {
    const grabInvoice = listOfInvoices.filter((invoice) => invoice.id === id);
    const newList = listOfInvoices.filter((invoice) => invoice.id !== id);
    grabInvoice[0].status = "Paid";
    newList.unshift(grabInvoice[0]);
    setListOfInvoices(newList);
  }

  return (
    <div className="view-container">
      {deleteModal && (
        <Modal
          darkMode={darkMode}
          header="Confirm Deletion"
          text={`Are you sure you want to delete invoice #${currentInvoice.id}? This action cannot be undone.`}
        >
          <Button
            text="Cancel"
            clname="button-cancel"
            event={() => setDeleteModal(false)}
            darkMode={darkMode}
          />
          <Link to="/invoice-react">
            <Button
              text="Delete"
              clname="button-delete"
              event={() => deleteInvoice(currentInvoice.id)}
            />
          </Link>
        </Modal>
      )}

      <div className="view">
        <GoBack darkMode={darkMode} />
        <ViewStatus currentInvoice={currentInvoice} darkMode={darkMode} />
        <ViewInvoice
          currentInvoice={currentInvoice}
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          deleteInvoice={deleteInvoice}
          darkMode={darkMode}
          windowWidth={windowWidth}
        />
        <BottomBar darkMode={darkMode} clname="view-bottom-bar">
          {/* <Link to="/invoice-react/edit">
          <Button text="Edit" clname="button-edit" />
        </Link> */}
          <Button
            text="Delete"
            clname="button-delete"
            event={() => setDeleteModal(true)}
          />
          <Link onClick={() => markPaid(currentInvoice.id)} to="/invoice-react">
            <Button text="Mark as Paid" clname="button-mark" />
          </Link>
        </BottomBar>
      </div>
    </div>
  );
};
