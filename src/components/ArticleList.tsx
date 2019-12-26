import React, { useState, useEffect } from "react";
import { Article } from "./Article";
import { FlatList, ActivityIndicator } from "react-native";
import { ArticleType } from "../data/types";

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
        <Article article={item} base_uri="https://lobste.rs" />
      )}
      keyExtractor={(item: ArticleType) => item.short_id}
      refreshing={refreshing}
      onRefresh={refreshData}
    />
  );
}
