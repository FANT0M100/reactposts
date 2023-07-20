import React, { useState } from "react";
import classes from "./PostsList.module.css";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostsList = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function changeBodyHandler(e) {
    setEnteredBody(e.target.value);
  }

  function changeAuthorHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
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
