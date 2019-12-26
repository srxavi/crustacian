import React from "react";
import { useNavigationParam } from "react-navigation-hooks";
import { ArticleType } from "../data/types";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: "4%"
  }
});

const Comments = () => {
  const article: ArticleType = useNavigationParam("article");

  return (
    <View>
      <Text style={styles.title}>{article.title}</Text>
    </View>
  );
};

export default Comments;
