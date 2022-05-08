import { HomeHeader } from "./HomeHeader";
import { HomeList } from "./HomeList";

export const HomeFull = ({ listOfInvoices, setCurrentInvoice }) => {
  return (
    <div>
      <HomeHeader listOfInvoices={listOfInvoices} />
      <HomeList
        listOfInvoices={listOfInvoices}
        setCurrentInvoice={setCurrentInvoice}
      />
    </div>
  );
};
