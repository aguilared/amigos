import { useState } from "react";
import { StyleSheet } from "react-native";
import { SearchBar, FAB, Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import ContactList from "../components/ContactList";
//{ navigation }: RootTabScreenProps<'TabOne'>

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
        <SearchBar
          placeholder="Buscas un negocio en concreto?"
          onChangeText={updateSearch}
          value={search}
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "#eaeaea",
            borderRadius: 20,
          }}
          inputContainerStyle={{
            backgroundColor: "transparent",
            borderColor: "#eaeaea",
          }}
          inputStyle={{ backgroundColor: "white" }}
          lightTheme
        />
      </View>

      {contacts && contacts.length > 0 ? (
        <ContactList list={contacts} />
      ) : (
        <Text style={{ marginVertical: 20, textAlign: "center" }}>
          No se encontraron negocios.
        </Text>
      )}
      <View style={styles.footerContainer}>
        <LinearGradient
          colors={["#3272A5", "#3E8CBC", "#469DCB"]}
          style={{
            paddingVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            width: 314,
            height: 58,
          }}
          start={{ x: -1, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Icon name="pluscircleo" type="antdesign" color="white" />
          <Icon name="creditcard" type="antdesign" color="white" />
          <Icon name="shoppingcart" type="antdesign" color="white" />
        </LinearGradient>
      </View>
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
    height: 70,
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
