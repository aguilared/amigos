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
  id: number;
  name: string;
  isFriend: boolean;
};

type ContactList = {
  list: {
    id: number;
    name: string;
    isFriend: boolean;
  }[];
};

const ContactList = ({ list }: ContactList) => {
  return (
    <View>
      {list.map((l, i) => (
        <ListItem key={l.id} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
          </ListItem.Content>
          {l.isFriend ? (
            <Icon name="adduser" type="antdesign" color="#3D82AD" />
          ) : (
            <Icon name="deleteuser" type="antdesign" color="#eaeaea" />
          )}
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContactList;
