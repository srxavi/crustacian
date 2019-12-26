import React, { useState, useEffect } from "react";
import { useNavigationParam } from "react-navigation-hooks";
import { User } from "../types";
import { View } from "react-native";
import { Text, ListItem } from "react-native-elements";
import moment from "moment";

const Author = () => {
  const url = useNavigationParam("url");
  const user: User = useNavigationParam("user");

  return (
    <View>
      <Text h2 style={{ paddingLeft: "2%" }}>
        {user.username}
      </Text>
      <ListItem
        leftIcon={{
          type: "font-awesome",
          name: "arrow-circle-up",
          color: "black"
        }}
        title={
          <Text style={{ fontSize: 18 }}>
            <Text style={{ fontWeight: "bold" }}>karma </Text>
            <Text>{user.karma.toString()}</Text>
          </Text>
        }
      />
      <ListItem
        leftIcon={{ type: "font-awesome", name: "calendar", color: "black" }}
        title={
          <Text style={{ fontSize: 18 }}>
            <Text style={{ fontWeight: "bold" }}>user since </Text>
            <Text>{moment(user.created_at).format("L")}</Text>
          </Text>
        }
      />
      <Text style={{ paddingLeft: "4%", paddingTop: "5%" }}>{user.about}</Text>
    </View>
  );
};

export default Author;
