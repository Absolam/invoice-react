import { Overcast } from "./Overcast";
import { Button } from "./Buttons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Modal = ({ send, sendRef }) => {
  useEffect(() => {
    window.scrollTo(0, 700);
  });

  return (
    <>
      <Overcast />
      <div className="modal" ref={sendRef}>
        <h4>Confirm Send</h4>
        <p>Are you sure you want to send?</p>
        <div className="modal-buttons">
          <Button text="Cancel" clname="button-cancel" />
          <Link to="/">
            <Button text="Submit" clname="button-send" event={() => send()} />
          </Link>
        </div>
      </div>
    </>
  );
};
