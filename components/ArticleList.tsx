import React, { useState, useEffect } from "react";
import {
  ListItem,
  Thumbnail,
  Left,
  Text,
  Body,
  List,
  Spinner
} from "native-base";

type Article = {
  shord_id: string;
  url: string;
  title: string;
  tags: Array<string>;
  submitter_user: {
    username: string;
    avatar_url: string;
  };
};

export function ArticleList() {
  const [isLoaded, setIsloaded] = useState(false);
  const [data, setData] = useState();

  const processData = (data: Array<Article>) => {
    const parsed_results = data.map((article: Article) => {
      const avatarUrl = `https://lobste.rs${article.submitter_user.avatar_url}`;
      console.log(avatarUrl);
      return (
        <ListItem key={article.shord_id} avatar>
          <Left>
            <Thumbnail source={{ uri: avatarUrl }} />
          </Left>
          <Body>
            <Text>{article.title}</Text>
          </Body>
        </ListItem>
      );
    });
    setIsloaded(true);
    setData(parsed_results);
  };

  const fetchData = () => {
    fetch("https://lobste.rs/hottest.json").then(res =>
      res.json().then(processData)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!isLoaded) {
    return <Spinner />;
  }
  return <List>{data}</List>;
}
