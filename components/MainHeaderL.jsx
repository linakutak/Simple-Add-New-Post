import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./MainHeader.module.css";
import ModalL from "./ModalL";
import NewPostL from "./NewPostL";
function MainHeaderL({ onShowDModal }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={onShowDModal}>
          <MdPostAdd size={18}></MdPostAdd>New Post
        </button>
      </p>
    </header>
  );
}
export default MainHeaderL;
