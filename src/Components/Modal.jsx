import { Overcast } from "./Overcast";
import { useEffect } from "react";

export const Modal = ({ send, sendRef, header, text, children, darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 700);
  });

  let dark = darkMode
    ? {
        darkBg: "#141625",
        txtOffWhite: "#DFE3FA",
        txtWhite: "#fff",
        txtLight: "#888EB0",
        darkBgAlt: "#1E2139",
      }
    : "";

  return (
    <>
      <Overcast />
      <div
        className="modal"
        ref={sendRef}
        style={{ backgroundColor: dark.darkBgAlt }}
      >
        <h4 style={{ color: dark.txtWhite }}>{header}</h4>
        <p style={{ color: dark.txtLight }}>{text}</p>
        <div className="modal-buttons">{children}</div>
      </div>
    </>
  );
};
