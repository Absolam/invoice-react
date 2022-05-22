export const Button = ({ text, clname, event, type }) => {
  return (
    <button type={type} onClick={event} className={clname}>
      {text}
    </button>
  );
};
