import { Overcast } from "./Overcast";
import { useEffect } from "react";

export const Modal = ({
  header,
  text,
  children,
  darkMode,
  refProp,
  scroll,
}) => {
  // useEffect(() => {
  //   window.scrollTo(0, 700);
  // });

  useEffect(() => {
    scroll();
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
        ref={refProp}
        style={{ backgroundColor: dark.darkBgAlt }}
      >
        <h4 style={{ color: dark.txtWhite }}>{header}</h4>
        <p style={{ color: dark.txtLight }}>{text}</p>
        <div className="modal-buttons">{children}</div>
      </div>
    </>
  );
};
