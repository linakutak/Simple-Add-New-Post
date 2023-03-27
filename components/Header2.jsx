import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./MainHeader.module.css";
function Header2({ onOpen }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button
          className={classes.button}
          onClick={(event) => onOpen(event, true)}
        >
          <MdPostAdd size={38}></MdPostAdd>New Post
        </button>
      </p>
    </header>
  );
}
export default Header2;
