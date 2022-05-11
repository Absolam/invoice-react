import { HomeEmpty } from "../../Components/HomeEmpty";
import { HomeFull } from "../../Components/HomeFull";
import { useEffect } from "react";
import "../Home/index.css";

export const Home = ({ listOfInvoices, setCurrentInvoice }) => {
  useEffect(() => {
    document.title = "Invoice | Home";
  }, []);

  return (
    <div className="home">
      {listOfInvoices.length > 0 ? (
        <HomeFull
          listOfInvoices={listOfInvoices}
          setCurrentInvoice={setCurrentInvoice}
        />
      ) : (
        <HomeEmpty listOfInvoices={listOfInvoices} />
      )}
    </div>
  );
};
