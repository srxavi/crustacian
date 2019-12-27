import React from "react";
import { CommentType } from "../data/types";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";
import Comment from "./Comment";

type Props = {
  comments: Array<CommentType>;
};
export default function CommentList(props: Props) {
  if (!props.comments) {
    return <ActivityIndicator />;
  } else {
    return (
      <FlatList
        data={props.comments}
        renderItem={({ item }) => <Comment comment={item} />}
        keyExtractor={(item: CommentType) => item.short_id}
      />
    );
  }
}
