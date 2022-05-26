import { HomeEmpty } from "../../Components/HomeEmpty";
import { HomeFull } from "../../Components/HomeFull";
import { useEffect, useState } from "react";
import "../Home/index.css";

export const Home = ({
  listOfInvoices,
  setListOfInvoices,
  setCurrentInvoice,
  darkMode,
  windowWidth,
  setNewInvoice,
  newInvoice,
}) => {
  useEffect(() => {
    document.title = "Invoice | Home";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [listOfInvoices]);

  const [createSideBar, setCreateSideBar] = useState(false);

  return (
    <div className="home">
      {listOfInvoices.length > 0 ? (
        <HomeFull
          listOfInvoices={listOfInvoices}
          setListOfInvoices={setListOfInvoices}
          setCurrentInvoice={setCurrentInvoice}
          darkMode={darkMode}
          windowWidth={windowWidth}
          setNewInvoice={setNewInvoice}
          newInvoice={newInvoice}
          createSideBar={createSideBar}
          setCreateSideBar={setCreateSideBar}
        />
      ) : (
        <HomeEmpty
          listOfInvoices={listOfInvoices}
          darkMode={darkMode}
          createSideBar={createSideBar}
          setCreateSideBar={setCreateSideBar}
        />
      )}
    </div>
  );
};
