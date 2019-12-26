import React from "react";
import { ListItem, Icon } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "react-navigation-hooks";
import { ArticleType } from "../data/types";
import { ArticleInfo } from "./ArticleInfo";

type Props = {
  base_uri: string;
  article: ArticleType;
};
export function Article(props: Props) {
  const avatarUrl = `${props.base_uri}/${props.article.submitter_user.avatar_url}`;
  const { navigate } = useNavigation();
  return (
    <ListItem
      title={props.article.title}
      titleStyle={{ fontWeight: "600" }}
      subtitle={
        <ArticleInfo
          user={props.article.submitter_user}
          karma={props.article.score}
          dateTime={props.article.created_at}
        />
      }
      leftAvatar={{ source: { uri: avatarUrl } }}
      bottomDivider
      onPress={async () => {
        if (!props.article.url) {
          navigate("Comments", { article: props.article });
        } else {
          await WebBrowser.openBrowserAsync(props.article.url, {
            enableBarCollapsing: true
          });
        }
      }}
      rightIcon={
        <Icon
          iconStyle={{}}
          type="font-awesome"
          name="comment-o"
          onPress={() => {
            navigate("Comments", { article: props.article });
          }}
        ></Icon>
      }
    />
  );
}
