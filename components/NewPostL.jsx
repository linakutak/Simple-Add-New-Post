import classes from "./NewPost.module.css";
import { useState } from "react";
function NewPostL({ onCancel, onCreate }) {
  const [postData, setPostData] = useState([]);
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  // console.log(onStopDPosting);
  // setIsToDisplay(isPosting.isPosting);
  const appendDPost = () => {
    event.preventDefault();
    // setPostData([post, ...postData]);
    setPostData((postData) => [post, ...postData]);
    console.log(postData);
    console.log(post);
    // onStopDPosting();
  };
  const bodyChangeHandler = (event) => {
    setPostData({ author: postData.author, body: event.target.value });
  };
  const textChangeHandler = (event) => {
    setPostData({ author: event.target.value, body: postData.body });
  };
  return (
    <form>
      <div className={classes.form}>
        <p>
          <label>Text</label>
          <textarea required onChange={bodyChangeHandler}></textarea>
        </p>
        <p>
          <label>Author</label>
          <input required onChange={textChangeHandler}></input>
        </p>
        <div className={classes.actions}>
          <button type="button" onClick={onCancel}>
            CANCEL
          </button>
          <button type="submit" onClick={(event) => onCreate(event, postData)}>
            POST
          </button>
        </div>
      </div>
    </form>
  );
}
export default NewPostL;
