import React from "react";
import { useNavigationParam } from "react-navigation-hooks";

const Comments = () => {
  const url = useNavigationParam("url");

  console.log(url);

  return <p>fake data</p>;
};

export default Comments;
