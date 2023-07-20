import React from "react";
import classes from "./PostsList.module.css";

import Post from "./Post";

const PostsList = () => {
  return (
    <ul className={classes.posts}>
      <Post author="Giorgi" body="Hello World" />
      <Post author="Anna" body="Hawe good day" />
    </ul>
  );
};

export default PostsList;
