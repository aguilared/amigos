import React, { useState } from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import {
  Text,
  ListItem,
  Avatar,
  Icon,
  Badge,
  ListItemProps,
  Button,
  Switch,
  lightColors,
} from "@rneui/themed";

type ListData = {
  name: string;
  avatar_url: string;
  subtitle: string;
  linearGradientColors: string[];
};

type ContactList = {
  list: {
    name: string;
    avatar_url: string;
    subtitle: string;
    linearGradientColors: string[];
  }[];
};

const ContactList = ({ list }: ContactList) => {
  return (
    <View>
      {list.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar source={{ uri: l.avatar_url }} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContactList;
