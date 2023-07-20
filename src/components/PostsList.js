import React, { useState } from "react";
import classes from "./PostsList.module.css";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostsList = ({ isPosting, onStopPosting }) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(e) {
    setEnteredBody(e.target.value);
  }

  function changeAuthorHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChnage={changeAuthorHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Anna" body="Hawe good day" />
      </ul>
    </>
  );
};

export default PostsList;
