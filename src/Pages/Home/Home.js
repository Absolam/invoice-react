import { HomeEmpty } from "../../Components/HomeEmpty";
import { HomeFull } from "../../Components/HomeFull";
import "../Home/index.css";

export const Home = ({ listOfInvoices, setCurrentInvoice }) => {
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
