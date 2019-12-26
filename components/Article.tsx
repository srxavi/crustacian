import React from "react";
import { ListItem, Button } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";
import { Text } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { User } from "../types";

type SubProps = {
  user: User;
};
function Substring(props: SubProps) {
  const userUrl = `https://lobste.rs/u/${props.user.username}.json`;
  const { navigate } = useNavigation();

  return (
    <Text
      style={{ fontWeight: "200", color: "black", paddingTop: "2%" }}
      onPress={() => {
        navigate("Author", { url: userUrl, user: props.user });
      }}
    >
      {props.user.username}
    </Text>
  );
}

type Props = {
  short_id: string;
  title: string;
  author: User;
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
      subtitle={<Substring user={props.author} />}
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
