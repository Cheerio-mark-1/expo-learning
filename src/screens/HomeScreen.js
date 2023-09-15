import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";


const HomeScreen = ({ navigation }) => {
  console.log(navigation);

  return (
    <View>
      <Text style={[styles.text, styles.color]}>Hi there this is the test app</Text>
      <ComponentsScreen gretting={'Rajas Bhagatkar'} />
      <Button
        title="go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="to to ImageScreen"
        onPress={() => navigation.navigate("ImageScreen")}
      />
      <TouchableOpacity onPress={() => console.log('clicked')
      }>
        <Text>
          click me
        </Text>
      </TouchableOpacity>
    </View >

  )
};

/** 
 * ! For button use this for most of the time
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("List")}
      >
        <Text style={styles.buttonText}>Go to List Demo</Text>
      </TouchableOpacity>
 */
const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  color: {
    color: "green"
  },
  button: {
    alignItems: "center",
    marginTop: 30,
    padding: 20

  },
  buttonText: {
    // color: "#007AFF", // Apple iOS Blue
    color: "#0061E6"
  }
});

export default HomeScreen;
