import { HomeHeader } from "./HomeHeader";
import { HomeList } from "./HomeList";

export const HomeFull = ({ listOfInvoices, setCurrentInvoice, darkMode }) => {
  return (
    <div>
      <HomeHeader listOfInvoices={listOfInvoices} darkMode={darkMode} />
      <HomeList
        listOfInvoices={listOfInvoices}
        setCurrentInvoice={setCurrentInvoice}
        darkMode={darkMode}
      />
    </div>
  );
};
