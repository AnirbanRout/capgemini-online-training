import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView } from "react-native";

const Orders = ({ route, navigation }) => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    if (route.params?.newOrder) {
      setOrders((prevOrders) => [...prevOrders, route.params.newOrder]);
    }
  }, [route.params?.newOrder]);

  return (
    <ScrollView>
      <Text>Orders Page</Text>

      {orders.length === 0 ? (
        <Text>No orders found.</Text>
      ) : (
        orders.map((order) => (
          <View
            key={order.id}
            style={{
              borderWidth: 1,
              padding: 10,
              margin: 10,
            }}
          >
            <Text>Order ID: {order.id}</Text>
            <Text>Time: {new Date(order.orderDate).toLocaleString()}</Text>
            {order.items.map((item) => (
              <Text key={item.id}>
                {item.name} : {item.quantity}
              </Text>
            ))}
            <Text>Total: ${order.total.toFixed(2)}</Text>

            <Button
              title="View Details"
              onPress={() => setSelectedOrder(order)}
            />
          </View>
        ))
      )}

      <Button title="Cart" onPress={() => navigation.navigate("Cart")} />

      {selectedOrder && (
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            margin: 10,
          }}
        >
          <Text>Order Details</Text>

          <Text>Order ID: {selectedOrder.id}</Text>

          {selectedOrder.items.map((item, index) => (
            <View key={index}>
              <Text>{item.name}</Text>
              <Text>Price: ${item.price}</Text>
              <Text>Quantity: {item.quantity}</Text>
            </View>
          ))}

          <Text>Subtotal: ${selectedOrder.subtotal.toFixed(2)}</Text>
          <Text>Tax: ${selectedOrder.tax.toFixed(2)}</Text>
          <Text>Total: ${selectedOrder.total.toFixed(2)}</Text>
          <Button title="Close" onPress={() => setSelectedOrder(null)} />
        </View>
      )}
    </ScrollView>
  );
};

export default Orders;
