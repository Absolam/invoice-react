import { useEffect } from "react";

export const Edit = () => {
  useEffect(() => {
    document.title = "Invoice | Edit";
  }, []);

  return <div>Edit</div>;
};
