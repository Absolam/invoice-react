import { HomeHeader } from "./HomeHeader";
import { HomeList } from "./HomeList";

export const HomeFull = ({ listOfInvoices }) => {
  return (
    <div>
      <HomeHeader listOfInvoices={listOfInvoices} />
      <HomeList listOfInvoices={listOfInvoices} />
    </div>
  );
};
