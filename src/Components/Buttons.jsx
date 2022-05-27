export const Button = ({ text, clname, event, type, darkMode }) => {
  let dark = darkMode
    ? {
        darkBg: "#1E2139",
        blackBg: "#141625",
        txtOffWhite: "#DFE3FA",
        txtWhite: "#fff",
        border: "1px solid #252945",
        discard: "#252945",
      }
    : "";

  return (
    <button type={type} onClick={event} className={clname}>
      {text}
    </button>
  );
};
