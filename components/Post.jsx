import classes from "./Post.module.css";
const names = ["Lina", "Kutak", "Payang", "Budu"];

// const [count, setCount] = useState(0);
function Post(props) {
  const chooseName = names[Math.floor(Math.random() * names.length)];
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </li>
  );
}
export default Post;
