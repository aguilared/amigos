import * as WebBrowser from "expo-web-browser";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { ButtonGroup } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function HeaderTitle() {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={{ width: "70%" }}>
      <ButtonGroup
        buttons={["Amigos", "Negocios"]}
        selectedIndex={route.name === "Friends" ? 0 : 1}
        containerStyle={{ borderRadius: 20 }}
        buttonStyle={{ borderRadius: 20 }}
        selectedButtonStyle={{ backgroundColor: "#3D82AD" }}
        buttonContainerStyle={{ borderRadius: 20 }}
        onPress={() =>
          navigation.navigate(
            route.name === "Friends" ? "Bussiness" : "Friends"
          )
        }
      />
    </View>
  );
}
