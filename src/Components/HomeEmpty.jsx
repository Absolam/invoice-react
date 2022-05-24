import { HomeHeader } from "./HomeHeader";
import { Empty } from "./Empty";

export const HomeEmpty = ({ listOfInvoices, darkMode }) => {
  return (
    <>
      <HomeHeader listOfInvoices={listOfInvoices} darkMode={darkMode} />
      <Empty className="empty-container" darkMode={darkMode} />
    </>
  );
};
