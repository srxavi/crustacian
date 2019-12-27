import React, { useEffect, useState } from "react";
import { useNavigationParam } from "react-navigation-hooks";
import { ArticleType, CommentType } from "../data/types";
import { View } from "react-native";
import CommentsHeader from "../components/CommentsHeader";
import { Divider } from "react-native-elements";
import CommentList from "../components/CommentList";

const Comments = () => {
  const article: ArticleType = useNavigationParam("article");
  const comments_url = `${article.short_id_url}.json`;
  const [comments, setComments] = useState<Array<CommentType>>();

  const fetchComments = async () => {
    const res = await fetch(comments_url);
    const data: ArticleType = await res.json();
    setComments(data.comments);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <View>
      <CommentsHeader article={article} />
      <Divider style={{ marginTop: "5%" }} />
      <CommentList comments={comments} />
    </View>
  );
};

export default Comments;
