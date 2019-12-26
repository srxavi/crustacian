import React, { useState, useEffect } from "react";
import { useNavigationParam } from "react-navigation-hooks";
import { UserType } from "../data/types";
import { View, StyleSheet } from "react-native";
import { Text, ListItem } from "react-native-elements";
import moment from "moment";

const styles = StyleSheet.create({
  about: {
    paddingLeft: "4%",
    paddingRight: "4%",
    paddingTop: "5%"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  type: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: "4%"
  },
  content: {
    fontSize: 18
  }
});

const Author = () => {
  const user: UserType = useNavigationParam("user");

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
          <View style={styles.row}>
            <Text style={styles.type}>karma</Text>
            <Text style={styles.content}>{user.karma.toString()}</Text>
          </View>
        }
      />
      <ListItem
        leftIcon={{ type: "font-awesome", name: "calendar", color: "black" }}
        title={
          <View style={styles.row}>
            <Text style={styles.type}>user since </Text>
            <Text style={styles.content}>
              {moment(user.created_at).format("L")}
            </Text>
          </View>
        }
      />
      <Text style={styles.about}>{user.about}</Text>
    </View>
  );
};

export default Author;
