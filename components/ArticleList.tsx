import React, { useState, useEffect } from "react";
import { Article } from "./Article";
import { FlatList, ActivityIndicator } from "react-native";
import { ArticleType } from "../types";

export function ArticleList() {
  const [isLoaded, setIsloaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
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

  const refreshData = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    refreshData();
  }, []);

  if (!isLoaded) {
    return <ActivityIndicator />;
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
          article_url={item.url}
          author={item.submitter_user}
        />
      )}
      keyExtractor={(item: ArticleType) => item.short_id}
      refreshing={refreshing}
      onRefresh={refreshData}
    />
  );
}
