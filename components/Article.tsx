import React from "react";
import { ListItem } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";

type Props = {
  short_id: string;
  title: string;
  author: string;
  thumbnail: string;
  base_uri: string;
  article_url: string;
};
export function Article(props: Props) {
  const avatarUrl = `${props.base_uri}/${props.thumbnail}`;
  return (
    <ListItem
      title={props.title}
      titleStyle={{ fontWeight: "600" }}
      subtitle={props.author}
      subtitleStyle={{ fontWeight: "200" }}
      leftAvatar={{ source: { uri: avatarUrl } }}
      bottomDivider
      onPress={async () => {
        await WebBrowser.openBrowserAsync(props.article_url, {
          enableBarCollapsing: true
        });
      }}
    />
  );
}
