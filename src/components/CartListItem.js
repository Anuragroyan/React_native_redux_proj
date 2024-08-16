import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const CartListItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productId: cartItem.product.id,
        amount: 1,
      })
    );
  };
  const decreaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productId: cartItem.product.id,
        amount: -1,
      })
    );
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>
        <View style={styles.footer}>
          <Feather
            name="minus-circle"
            size={24}
            color="#c2642a"
            onPress={decreaseQuantity}
          />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Feather
            name="plus-circle"
            size={24}
            color="#1518b4"
            onPress={increaseQuantity}
          />
          <Text style={styles.itemTotal}>
            $ {cartItem.product.price * cartItem.quantity}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartListItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
    marginTop: 20,
  },
  image: {
    width: "40%",
    aspectRatio: 1,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#71d871",
    marginTop: 20,
  },
  name: {
    fontWeight: "500",
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: "gray",
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "gray",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "500",
  },
});
