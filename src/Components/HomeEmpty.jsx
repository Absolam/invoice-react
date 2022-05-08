import { HomeHeader } from "./HomeHeader";
import { Empty } from "./Empty";

export const HomeEmpty = ({ listOfInvoices }) => {
  return (
    <>
      <HomeHeader listOfInvoices={listOfInvoices} />
      <Empty className="empty-container" />
    </>
  );
};
