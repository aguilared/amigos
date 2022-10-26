import { useState } from "react";
import { StyleSheet } from "react-native";
import { Input, Icon } from "@rneui/themed";
import { Text, View } from "../components/Themed";
import ContactList from "../components/ContactList";
import Footer from "../components/Footer";

const bussinessList = [
  {
    id: 1,
    name: "Telepizza",
    isFriend: false,
  },
  {
    id: 2,
    name: "Frangelica",
    isFriend: false,
  },
  {
    id: 3,
    name: "Repuestos Negrillo",
    isFriend: true,
  },
  {
    id: 4,
    name: "Burger King",
    isFriend: true,
  },
  {
    id: 5,
    name: "Dominos Pizzas",
    isFriend: true,
  },
  {
    id: 6,
    name: "Pizzeria Alfredo",
    isFriend: true,
  },
];

export default function Bussiness() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(bussinessList);

  const updateSearch = (search: string) => {
    setSearch(search);
    setContacts(bussinessList.filter((v) => v.name.includes(search)));
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Input
          placeholder="Buscas un negocio en concreto?"
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

      {contacts && contacts.length > 0 ? (
        <ContactList list={contacts} />
      ) : (
        <Text style={{ marginVertical: 20, textAlign: "center" }}>
          No se encontraron negocios.
        </Text>
      )}
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
  footerContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 2,
    paddingHorizontal: 40,
  },
});
