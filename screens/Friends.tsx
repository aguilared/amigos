import { useState } from "react";
import { StyleSheet } from "react-native";
import { SearchBar, Input, Icon } from "@rneui/themed";

import Footer from "../components/Footer";
import { Text, View } from "../components/Themed";
import ContactList from "../components/ContactList";

const contactList = [
  {
    id: 1,
    name: "Lettie Phelps",
    isInvited: false,
    isInvitedStat: false,
  },
  {
    id: 2,
    name: "Josephine Gordon",
    isInvited: true,
    isInvitedStat: false,
  },
  {
    id: 3,
    name: "Tommy Lewis",
    isInvited: false,
    isInvitedStat: false,
  },
  {
    id: 4,
    name: "Tillie Wells",
    isInvited: true,
    isInvitedStat: false,
  },
  {
    id: 5,
    name: "Lydia Gray",
    isInvited: true,
    isInvitedStat: true,
  },
  {
    id: 6,
    name: "Jack Ramirez",
    isInvited: false,
    isInvitedStat: false,
  },
  {
    id: 7,
    name: "Catherine Bennet",
    isInvited: true,
    isInvitedStat: false,
  },
  {
    id: 8,
    name: "Wesley Buchanan",
    isInvited: false,
    isInvitedStat: false,
  },
  {
    id: 9,
    name: "Lydia Grayy",
    isInvited: true,
    isInvitedStat: true,
  },
  {
    id: 10,
    name: "Jack Ramirezz",
    isInvited: false,
    isInvitedStat: false,
  },
  {
    id: 12,
    name: "Catherine Bennett",
    isInvited: true,
    isInvitedStat: false,
  },
  {
    id: 13,
    name: "Wesley Buchanann",
    isInvited: false,
    isInvitedStat: false,
  },
  {
    id: 14,
    name: "Catherine Bennett88",
    isInvited: true,
    isInvitedStat: false,
  },
];

export default function Friends() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(contactList);

  const updateSearch = (search: string) => {
    setSearch(search);
    setContacts(contactList.filter((v) => v.name.includes(search)));
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Input
          placeholder="Buscas a alguien?"
          onChangeText={updateSearch}
          value={search}
          inputStyle={{ color: "#979797", fontSize: 14, paddingHorizontal: 5 }}
          placeholderTextColor="#979797"
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "#979797",
            borderRadius: 20,
            height: 44,
          }}
          underlineColorAndroid="transparent"
          rightIcon={<Icon name="search" color="#979797" />}
        />
      </View>
      <View style={styles.container}>
        {contacts && contacts.length > 0 ? (
          <ContactList list={contacts} />
        ) : (
          <Text style={{ marginVertical: 20, textAlign: "center" }}>
            No se encontraron contactos.
          </Text>
        )}
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 5,
    height: 44,
    paddingHorizontal: 20,
    width: "100%",
  },

  logo: {
    marginTop: 1,
    marginBottom: 10,
  },
});
