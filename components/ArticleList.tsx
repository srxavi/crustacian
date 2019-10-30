import React, { useState, useEffect } from "react";
import {
  ListItem,
  Thumbnail,
  Left,
  Text,
  Body,
  List,
  Spinner,
  Item
} from "native-base";
import { Article } from "./Article";
import { FlatList } from "react-native";

type ArticleType = {
  short_id: string;
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

  const storeData = (data: Array<ArticleType>) => {
    setIsloaded(true);
    setData(data);
  };

  const fetchData = () => {
    fetch("https://lobste.rs/hottest.json").then(res =>
      res.json().then(storeData)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!isLoaded) {
    return <Spinner />;
  }
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Article
          thumbnail={item.submitter_user.avatar_url}
          base_uri="https://lobste.rs"
          short_id={item.short_id}
          title={item.title}
        />
      )}
      keyExtractor={(item: ArticleType) => item.short_id}
    />
  );
}
