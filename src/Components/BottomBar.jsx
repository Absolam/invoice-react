export const BottomBar = ({ children, clname, darkMode }) => {
  let dark = darkMode ? { darkBg: "#1E2139" } : "";

  return (
    <div
      className={`bottom-bar ${clname}`}
      style={{ backgroundColor: dark.darkBg }}
    >
      {children}
    </div>
  );
};
