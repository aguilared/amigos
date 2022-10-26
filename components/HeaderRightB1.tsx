import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { ButtonGroup } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ajustes from "../assets/images/Ajustes.svg";

export default function HeaderRightB() {
  const navigation = useNavigation();

  return (
    <View style={{ width: "10%" }}>
      <View style={styles.logo}>
        <Text
          onPress={() => navigation.navigate("Modal")}
          style={styles.textNumber}
        >
          +
        </Text>
        <Text
          onPress={() => navigation.navigate("Modal")}
          style={styles.textNumber}
        >
          +-
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  scrollView: {
    width: "100%",
  },
  containerStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textNumber: {
    color: "#0086B9",
    height: 34,
    width: 60,
    fontSize: 24,
    fontfamily: "Gotham Rounded",
  },
});