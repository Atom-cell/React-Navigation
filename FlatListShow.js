import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";

export default function FlatListShow({ route, navigation }) {
  const { list } = route.params;
  // console.log(list);
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <Text style={{ fontSize: 25, marginVertical: 8 }} key={index}>
            {item.name} | {item.brand} | {item.qty}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <View>
            <Text>No Products Available</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
