import React from "react";
import classes from "./NewPost.module.css";

function NewPost() {
  function changeBodyHandler(e) {
    console.log(e.target.value);
  }

  function changeAuthorHandler(e) {
    console.log(e.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
    </form>
  );
}

export default NewPost;
