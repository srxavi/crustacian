import React from "react";
import { CommentType } from "../data/types";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import moment from "moment";
import HTML from "react-native-render-html";

type Props = {
  comment: CommentType;
};
export default function Comment(props: Props) {
  return (
    <View>
      <View
        style={{ paddingLeft: `${(props.comment.indent_level - 1) * 10}%` }}
      >
        <View style={{ flexDirection: "row", paddingTop: "3%" }}>
          <Text style={{ fontWeight: "bold", paddingHorizontal: "5%" }}>
            {props.comment.commenting_user.username}
          </Text>
          <Text>{moment(props.comment.updated_at).fromNow()}</Text>
        </View>
        <View style={{ paddingHorizontal: "5%" }}>
          <HTML html={props.comment.comment}></HTML>
        </View>
      </View>
      <Divider />
    </View>
  );
}
