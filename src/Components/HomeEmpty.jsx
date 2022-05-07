import { HomeHeader } from "./HomeHeader";
import { Empty } from "./Empty";

export const HomeEmpty = () => {
  return (
    <>
      <HomeHeader />
      <Empty className="empty-container" />
    </>
  );
};
