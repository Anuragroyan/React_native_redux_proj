import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import Shoppingcart from "./screens/ShoppingCart";
import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="#498f49" />
                <Text style={{ marginLeft: 5, fontWeight: "700" }}>
                  {numberOfItems}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={Shoppingcart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
