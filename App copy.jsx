import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Post";
import PostsList from "./components/PostsList";

function App() {
  return (
    <>
      <PostsList />
      <PostsList />
    </>
  );
}

export default App;
