import classes from "./Modal.module.css";
import NewPost2 from "./NewPost2";
function Modal2({ onClose, children }) {
  //   console.log(children);
  return (
    <>
      <div
        onClick={(event) => onClose(event, false)}
        className={classes.backdrop}
      ></div>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
export default Modal2;
