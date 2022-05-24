import { HomeEmpty } from "../../Components/HomeEmpty";
import { HomeFull } from "../../Components/HomeFull";
import { useEffect } from "react";
import "../Home/index.css";

export const Home = ({ listOfInvoices, setCurrentInvoice, darkMode }) => {
  useEffect(() => {
    document.title = "Invoice | Home";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [listOfInvoices]);

  return (
    <div className="home">
      {listOfInvoices.length > 0 ? (
        <HomeFull
          listOfInvoices={listOfInvoices}
          setCurrentInvoice={setCurrentInvoice}
          darkMode={darkMode}
        />
      ) : (
        <HomeEmpty listOfInvoices={listOfInvoices} darkMode={darkMode} />
      )}
    </div>
  );
};
