import calsses from "./Modal.module.css";

function Modal({ children, onClose }) {
  console.log(children);
  return (
    <>
      <div className={calsses.backdrop} onClick={onClose}></div>
      <dialog open className={calsses.modal}>
        {children}
      </dialog>
      {/* <dialog className={calsses.modal}>{children[0]}</dialog> */}
    </>
  );
}
export default Modal;
