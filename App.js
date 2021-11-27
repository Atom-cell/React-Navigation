import * as React from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./Main";
import InputScreen from "./InputScreen";
import FlatListShow from "./FlatListShow";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="MainScreen"
          component={Main}
          options={{ title: "Shop User Panel" }}
        />
        <Stack.Screen
          name="Input"
          component={InputScreen}
          options={{ title: "Add Products" }}
        />
        <Stack.Screen name="List" component={FlatListShow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  wrapper: {
    flexDirection: "row",
    padding: 30,
    backgroundColor: "grey",
    justifyContent: "space-between",
    width: "80%",
    margin: 5,
    borderRadius: 10,
  },
  wrapper0: {
    flexDirection: "row",
    backgroundColor: "green",
    justifyContent: "space-between",
    width: "80%",
    margin: 5,
    borderRadius: 10,
  },
  wrapper1: {
    flexDirection: "row",
    padding: 30,
    backgroundColor: "grey",
    justifyContent: "space-between",
    width: "100%",
    // margin:5,
    borderRadius: 10,
  },
  txt: {
    fontSize: 25,
  },
  inputs: {
    padding: 20,
    fontSize: 15,
    borderWidth: 0.5,
    width: "80%",
    borderRadius: 30,
    margin: 5,
  },
  addBtn: {
    padding: 20,
    backgroundColor: "grey",
    fontSize: 20,
    borderRadius: 30,
  },
});
