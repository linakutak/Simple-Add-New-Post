import { useState } from "react";
import classes from "./components/PostsList.module.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Post";
import Display from "./components/Display";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import PostL from "./components/PostL";
import PostListL from "./components/PostListL";
import MainHeaderL from "./components/MainHeaderL";
import ModalL from "./components/ModalL";
import NewPostL from "./components/NewPostL";
import PostList2 from "./components/PostList2";
import Header2 from "./components/Header2";
import Modal2 from "./components/Modal2";
import NewPost2 from "./components/NewPost2";
import Post2 from "./components/Post2";

function App() {
  // const [showDModal, setShowDModal] = useState(false);
  // const [newPost, setNewPost] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const showDPost = (event, isToShow) => {
    setIsVisible(isToShow);
  };
  const createNewPost = (event, _post) => {
    event.preventDefault();
    setIsVisible(false);
    setPosts((posts) => [_post, ...posts]);
    console.log(posts);
    posts.map((post) => console.log(post));
    console.log(posts);
  };

  return (
    <>
      <Header2 onOpen={showDPost}></Header2>
      {isVisible && (
        <Modal2 onClose={showDPost}>
          <NewPost2 onCreatePost={createNewPost} onClose={showDPost} />
        </Modal2>
      )}
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post2 key={post.body} appendPost={post} />
        ))}
      </ul>
      <PostList2 appendPost={posts}></PostList2>
    </>
  );
}

export default App;
