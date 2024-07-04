import React from "react";
import Home from "../../img/home.png";
import Comment from "../../img/comment.png";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="home" />
      </Link>

      <Link to="../chat">
        <img src={Comment} alt="comment" />
      </Link>
    </div>
  );
};

export default NavIcons;