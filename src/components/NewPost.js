import React, { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(e) {
    setEnteredBody(e.target.value);
  }

  function changeAuthorHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        {enteredBody} {enteredAuthor}
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
    </form>
  );
}

export default NewPost;
