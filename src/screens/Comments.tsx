import React, { useEffect, useState } from "react";
import { useNavigationParam } from "react-navigation-hooks";
import { ArticleType, CommentType } from "../data/types";
import { View, FlatList } from "react-native";
import CommentsHeader from "../components/CommentsHeader";
import Comment from "../components/Comment";

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
      <FlatList
        ListHeaderComponent={<CommentsHeader article={article} />}
        data={comments}
        renderItem={({ item }) => <Comment comment={item} />}
        keyExtractor={(item: CommentType) => item.short_id}
      />
    </View>
  );
};

export default Comments;
