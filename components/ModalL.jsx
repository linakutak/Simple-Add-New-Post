import classes from "./Modal.module.css";
function ModaL({ onClose, children }) {
  console.log(children);
  console.log(onClose);
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
export default ModaL;
