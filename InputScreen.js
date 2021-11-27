import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Button,
} from "react-native";

const InputScreen = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [qty, setQty] = React.useState(null);
  const [price, setPrice] = React.useState(null);
  const [productList, setProductList] = React.useState([]);

  const addItem = () => {
    if (name !== "" && brand !== "" && qty !== null && price !== null) {
      let obj = {
        name: name,
        brand: brand,
        qty: qty,
        price: price,
        index: Math.random(),
      };

      setProductList([...productList, obj]);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 25, fontStyle: "italic" }}>Add Products</Text> */}

      <TextInput
        value={name}
        onChangeText={(name) => setName(name)}
        placeholder="Enter Product Name"
        style={styles.inputs}
      />

      <TextInput
        value={brand}
        onChangeText={(brand) => setBrand(brand)}
        placeholder="Enter Brand Name"
        style={styles.inputs}
      />
      <TextInput
        value={qty}
        onChangeText={(qty) => setQty(qty)}
        placeholder="Enter Product Quantity"
        style={styles.inputs}
        keyboardType="number-pad"
      />
      <TextInput
        value={price}
        onChangeText={(price) => setPrice(price)}
        placeholder="Enter Product Price"
        style={styles.inputs}
      />

      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
        }}
      >
        <Pressable onPress={() => addItem()} style={styles.addBtn}>
          <Text>Add Product</Text>
        </Pressable>

        <Pressable
          style={styles.addBtn}
          onPress={() => navigation.navigate("List", { list: productList })}
        >
          <Text>See Products</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default InputScreen;

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
