import classes from "./PostsList.module.css";
import PostL from "./PostL";
import { useState } from "react";
import ModalL from "./ModalL";
import NewPostL from "./NewPostL";
import { render } from "react-dom";
function PostListL({ _child }) {
  const children = [];
  const createNewPost = (value) => {
    //console.log(value);

    const { post } = this.state;
    children.push(<PostL />);
    console.log(children);
  };
  return (
    <>
      {isPosting && (
        <ModalL onClose={onStopDPosting}>
          <NewPostL onCancel={onStopDPosting}></NewPostL>
        </ModalL>
      )}
      <ul className={classes.posts}>
        <PostL></PostL>
        {props.children}
      </ul>
    </>
  );
}
export default PostListL;
