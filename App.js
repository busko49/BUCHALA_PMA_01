import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("use state");

  function handleInputText(text) {
    setTask(text);
  }

  function handleADDButton() {
    setTask();
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputText}
          style={styles.input}
          placeholder="Zadaj ulohu"
        />
        <Button onPress={handleADDButton} title="ADD" />
      </View>

      <View style={styles.taskContainer}>
        <Text>{task}</Text>
        <Text>ud</Text>
        <Text>ud</Text>
        <Text>ud</Text>
        <Text>ud</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b5ccd1",
    justifyContent: "center",
  },
  input: {
    borderWidth: 4,
    borderColor: "#000000",
    borderRadius: 8,
    width: "80%",
  },
  taskContainer: {
    flex: 3,
    borderTopWidth: 3,
    margin: 20,
    padding: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});