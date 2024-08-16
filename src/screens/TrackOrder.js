import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const TrackOrder = () => {
  const [ref, setRef] = useState("");
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        value={ref}
        onChangeText={setRef}
        placeholder="Your order reference"
      />
    </View>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  input: {
    borderColor: "lightgray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
