import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Products from "./Products";
import Cart from "./Cart";
import Orders from "./Orders";

const Tab = createBottomTabNavigator();

const RetailApp = () => {
  const products = [
    {
      id: "p101",
      name: "Basmati Rice 5kg",
      category: "GROCERY",
      price: 549,
      stock: 30,
      sku: "SKU-RICE-5KG",
      taxRate: 5,
    },
    {
      id: "p205",
      name: "Bluetooth Headphones",
      category: "ELECTRONICS",
      price: 1999,
      stock: 12,
      sku: "SKU-BT-HP-01",
      taxRate: 18,
    },
    {
      id: "p310",
      name: "Cotton T-Shirt",
      category: "CLOTHING",
      price: 399,
      stock: 50,
      sku: "SKU-TEE-COT-XL",
      taxRate: 5,
    },
    {
      id: "p420",
      name: "Ceramic Mug",
      category: "HOME",
      price: 199,
      stock: 80,
      sku: "SKU-MUG-CRM",
      taxRate: 12,
    },
  ];

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Products"
          component={Products}
          initialParams={{ products }}
        />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Orders" component={Orders} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RetailApp;
