import classes from "./Post.module.css";
function Post2({ appendPost }) {
  console.log(appendPost);
  return (
    <div className={classes.post}>
      <p className={classes.author}>{appendPost.author}</p>
      <p className={classes.text}>{appendPost.body}</p>
    </div>
  );
}
export default Post2;
