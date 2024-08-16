import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Text,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
  };
  const { width } = useWindowDimensions();
  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ aspectRatio: 1, width }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 10 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <Pressable style={styles.button} onPress={addToCartHandler}>
          <Text style={styles.buttonText}>Add to Cart 🛒</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
    marginLeft: 10,
    paddingRight: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 18,
    marginLeft: 10,
    paddingRight: 10,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
    lineHeight: 30,
    fontWeight: "300",
    marginLeft: 10,
    paddingRight: 10,
    paddingBottom: 85,
  },
  button: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: "#71d871",
    fontWeight: "800",
    fontSize: 16,
  },
});
