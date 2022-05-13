export const Button = ({ text, clname, event }) => {
  return (
    <div onClick={event} className={clname}>
      {text}
    </div>
  );
};
