import classes from "./PostsList.module.css";
import Post2 from "./Post2";
import { useState } from "react";
function PostList2({ appendPost }) {
  const [posts, setPosts] = useState([]);
  const addPostHandler = (postData) => {
    setPosts([postData, ...posts]);
  };
  return (
    <ul className={classes.posts}>
      {posts.map((post) => (
        <Post2 post />
      ))}
    </ul>
  );
}
export default PostList2;
