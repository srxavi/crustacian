import React from "react";
import { useNavigationParam } from "react-navigation-hooks";
import WebView from "react-native-webview";

const Details = () => {
  const url = useNavigationParam("url");

  console.log(url);

  return <WebView source={{ uri: url }} />;
};

export default Details;
