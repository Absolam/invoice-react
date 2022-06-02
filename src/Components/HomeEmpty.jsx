import { HomeHeader } from "./HomeHeader";
import { Empty } from "./Empty";

export const HomeEmpty = ({ listOfInvoices, darkMode, windowWidth }) => {
  return (
    <div className="home-empty-container">
      <HomeHeader
        listOfInvoices={listOfInvoices}
        darkMode={darkMode}
        windowWidth={windowWidth}
      />
      <Empty className="empty-container" darkMode={darkMode} />
    </div>
  );
};
