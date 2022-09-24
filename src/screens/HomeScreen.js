import React from "react";


import About from "../screenComponent/About";
import Blog from "../screenComponent/Blog";
import Comment from "../screenComponent/Comment";
import Courses from "../screenComponent/Courses";
import Follow from "../screenComponent/Follow";
import RegisterNow from "../screenComponent/RegisterNow";
import Succses from "../screenComponent/Succses";
import Video from "../screenComponent/Video";
function HomeScreen() {
  return (
    <div>
      <About />
      <Courses />
      <RegisterNow />
      <Succses />
      <Comment />
      <Video />
      <Follow />
      <Blog />
    </div>
  );
}

export default HomeScreen;
