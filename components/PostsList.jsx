import classes from "./PostsList.module.css";
import Post from "./Post";
import Modal from "./Modal";
import NewPost from "./NewPost";
import { useState } from "react";

// const [count, setCount] = useState(0);
function PostsList({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const hideModalHandler = (event) => {
    setModalIsVisible(false);
  };
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  function submitHandler(event) {
    setEnteredAuthor(event.target.value);
    setEnteredBody(event.target.value);
  }
  // let modalContent;
  // if (isPosting) {
  //   modalContent = (
  //     <Modal onClose={onStopPosting}>
  //       <NewPost
  //         onAuthorChange={authorChangeHandler}
  //         onBodyChange={bodyChangeHandler}
  //         onClose={hideModalHandler}
  //       />
  //     </Modal>
  //   );
  // }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onClose={hideModalHandler}
            onSubmit={submitHandler}
          ></NewPost>
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="payang" body="saya nama" />
        <Post author="budu" body="saya nama" />
      </ul>
    </>
  );
}
export default PostsList;
