import { HomeHeader } from "./HomeHeader";
import { HomeList } from "./HomeList";
import { Create } from "../Pages/Create/Create";

export const HomeFull = ({
  listOfInvoices,
  setListOfInvoices,
  setCurrentInvoice,
  darkMode,
  windowWidth,
  setNewInvoice,
  newInvoice,
  createSideBar,
  setCreateSideBar,
}) => {
  return (
    <div className="home-full">
      <HomeHeader
        listOfInvoices={listOfInvoices}
        darkMode={darkMode}
        windowWidth={windowWidth}
        createSideBar={createSideBar}
        setCreateSideBar={setCreateSideBar}
      />
      <HomeList
        listOfInvoices={listOfInvoices}
        setCurrentInvoice={setCurrentInvoice}
        darkMode={darkMode}
        windowWidth={windowWidth}
      ></HomeList>
    </div>
  );
};
