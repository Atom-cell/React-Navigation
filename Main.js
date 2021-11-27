import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Main = ({ route, navigation }) => {
  //   const { listlen } = route.params;

  React.useEffect(() => {
    if (route.params?.list) {
    }
  }, [route.params?.list]);

  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 25, fontStyle: "italic" }}>Shop User Panel</Text> */}

      <View style={styles.wrapper}>
        <Text style={styles.txt}>10</Text>
        <Text style={styles.txt}> Employees </Text>
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate("Input", { list: route.params?.list })
        }
        style={styles.wrapper0}
      >
        <View style={styles.wrapper1}>
          <Text style={styles.txt}>
            ❤ {route.params?.list ? route.params?.list.length : 0}
          </Text>
          <Text style={styles.txt}> Products </Text>
        </View>
      </Pressable>

      <View style={styles.wrapper}>
        <Text style={styles.txt}>20</Text>
        <Text style={styles.txt}> Suppliers </Text>
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.txt}>30</Text>
        <Text style={styles.txt}> Orders </Text>
      </View>
    </View>
  );
};

export default Main;

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
