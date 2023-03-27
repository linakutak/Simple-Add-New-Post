import classes from "./PuzzleBG.module.css";
import pic from "../assets/greenBtn.png";
// let pic = "../assets/greenBtn.png";
// const [count, setCount] = useState(0);

function PuzzleBG({ onClick, className, styles, imageSrc, item }) {
  return (
    <div
      onClick={onClick}
      className={className.bg}
      style={{
        visibility: styles.visibility === "hidden" ? "hidden" : "visible",
        left: styles.left === undefined ? "0px" : styles.left + "px",
        top: styles.top === undefined ? "0px" : styles.top + "px",
      }}
    >
      <img
        src={imageSrc === undefined ? pic : imageSrc}
        className={classes.img}
        alt="test"
      ></img>
      <div className={classes.text}>{item._text}</div>
    </div>
  );
}
export default PuzzleBG;
