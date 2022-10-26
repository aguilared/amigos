import { View, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@rneui/themed";

const windowHeight = Dimensions.get("window").height;

export default function Footer(): JSX.Element {
  return (
    <View style={styles.footerContainer}>
      <LinearGradient
        colors={["#0073A6", "#00A6D9"]}
        style={{
          borderRadius: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#FFF",
          width: 314,
          height: 54,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Icon name="person-add-outline" type="ionicon" color="white" />

        <Icon name="creditcard" type="antdesign" color="#7BB9D8" />
        <Icon name="shoppingcart" type="antdesign" color="#7BB9D8" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    alignSelf: "center",
    bottom: windowHeight / 30,
    paddingHorizontal: 40,
  },
});
