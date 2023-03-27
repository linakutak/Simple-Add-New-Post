import classes from "./NewPost.module.css";
import { useState } from "react";
function NewPost2({ onCreatePost, onClose }) {
  const [post, setPost] = useState({});

  return (
    <form>
      <div className={classes.form}>
        <p>
          <label>Text</label>
          <textarea
            required
            onChange={(event) =>
              setPost({ body: event.target.value, author: post.author })
            }
          ></textarea>
        </p>
        <p>
          <label>Author</label>
          <input
            required
            onChange={(event) =>
              setPost({ body: post.body, author: event.target.value })
            }
          ></input>
        </p>
        <div className={classes.actions}>
          <button type="button" onClick={(event) => onClose(event, false)}>
            CANCEL
          </button>
          <button type="submit" onClick={(event) => onCreatePost(event, post)}>
            POST
          </button>
        </div>
      </div>
    </form>
  );
}
export default NewPost2;
