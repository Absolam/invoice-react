import { useEffect } from "react";

export const Create = () => {
  useEffect(() => {
    document.title = "Invoice | Create";
  }, []);

  return <div>Create</div>;
};
