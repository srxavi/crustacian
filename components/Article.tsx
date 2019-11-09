import React from "react";
import { ListItem, Left, Thumbnail, Body, Text } from "native-base";
import { useNavigation } from "react-navigation-hooks";

type Props = {
  short_id: string;
  title: string;
  thumbnail: string;
  base_uri: string;
  article_url: string;
};
export function Article(props: Props) {
  const { navigate } = useNavigation();
  const avatarUrl = `${props.base_uri}/${props.thumbnail}`;
  return (
    <ListItem
      thumbnail
      onPress={() => {
        navigate("Details", { url: props.article_url });
      }}
    >
      <Left>
        <Thumbnail source={{ uri: avatarUrl }} />
      </Left>
      <Body>
        <Text>{props.title}</Text>
      </Body>
    </ListItem>
  );
}
