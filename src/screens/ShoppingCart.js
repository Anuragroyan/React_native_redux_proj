import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import {
  selectSubTotal,
  selectDeliveryPrice,
  selectTotal,
} from "../store/cartSlice";

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubTotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);
  return (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal} US $</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US $</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US $</Text>
      </View>
    </View>
  );
};

const Shoppingcart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>CheckOut 🛒</Text>
      </Pressable>
    </>
  );
};

export default Shoppingcart;

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "#498f49",
    borderTopWidth: 1,
    paddingBottom: 100,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 30,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: "#71d871",
    fontWeight: "900",
    fontSize: 16,
  },
});
