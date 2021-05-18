import "./App.css";
import React from "react";
import DisplayPosts from "./components/DisplayPosts";
import CreatePost from "./components/CreatePost";
import { withAuthenticator } from "aws-amplify-react";

function App() {
  return (
    <div className="App">
      <CreatePost />
      <DisplayPosts />
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
