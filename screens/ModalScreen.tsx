import React, { useState } from "react";
import { ButtonGroup } from "@rneui/themed";
import { Text, StyleSheet, View } from "react-native";

export default () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.subHeader}>Using Strings</Text>
        <ButtonGroup
          buttons={["SIMPLE", "BUTTON", "GROUP"]}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={{ marginBottom: 20 }}
        />
        <ButtonGroup
          buttons={["Multiple", "Select", "Button", "Group"]}
          selectMultiple
          selectedIndexes={selectedIndexes}
          onPress={(value) => {
            setSelectedIndexes(value);
          }}
          containerStyle={{ marginBottom: 20 }}
        />
        <Text style={styles.subHeader}>Using Components</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 853,
    width: 375,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0086B9",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
});
