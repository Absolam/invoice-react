import { HomeEmpty } from "../../Components/HomeEmpty";
import { HomeFull } from "../../Components/HomeFull";
import "./index.css";

export const Home = ({ listOfInvoices, setListOfInvocies }) => {
  return (
    <div className="home">
      {listOfInvoices.length > 0 ? (
        <HomeFull listOfInvoices={listOfInvoices} />
      ) : (
        <HomeEmpty listOfInvoices={listOfInvoices} />
      )}
    </div>
  );
};
