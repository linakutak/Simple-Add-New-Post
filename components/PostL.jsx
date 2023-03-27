import classes from "./Post.module.css";
function Post({ submitAuthor, submitBody }) {
  console.log(submitAuthor);
  return (
    <div className={classes.post}>
      <p className={classes.author}>{submitAuthor}</p>
      <p className={classes.text}>{submitBody}</p>
    </div>
  );
}
export default Post;
