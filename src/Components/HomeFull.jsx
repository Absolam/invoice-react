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
      {/* {createSideBar && windowWidth > 668 ? (
        <Create
          setNewInvoice={setNewInvoice}
          newInvoice={newInvoice}
          darkMode={darkMode}
          setListOfInvoices={setListOfInvoices}
          createSideBar={createSideBar}
          setCreateSideBar={setCreateSideBar}
          windowWidth={windowWidth}
        />
      ) : (
        ""
      )} */}
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
      ></HomeList>
    </div>
  );
};
