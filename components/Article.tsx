import React from "react"
import { ListItem, Left, Thumbnail, Body, Text } from "native-base";

type Props = {
    short_id: string
    title: string
    thumbnail: string
    base_uri: string
}
export function Article(props: Props) {
    const avatarUrl = `${props.base_uri}/${props.thumbnail}`;
    return (
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: avatarUrl }} />
          </Left>
          <Body>
            <Text>{props.title}</Text>
          </Body>
        </ListItem>
      );
}