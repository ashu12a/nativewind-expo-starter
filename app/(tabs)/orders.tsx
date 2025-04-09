import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from 'utils/constants';
import Header from 'components/Header';
import { useRouter } from 'expo-router';

// Mock order data
const orders = [
  {
    id: '1',
    orderNumber: '#ORD-2024-001',
    date: '2024-04-09',
    status: 'Delivered',
    total: 32990,
    items: [
      {
        id: '1',
        name: 'Voltas 1.5 Ton 3 Star Inverter Split AC',
        image: 'https://ankurelectricals.com/cdn/shop/files/1_c5b824ed-e0b0-43c9-aba7-d9f5405c3f77_large.png?v=1736941358',
        quantity: 1,
        price: 32990,
      },
    ],
  },
  {
    id: '2',
    orderNumber: '#ORD-2024-002',
    date: '2024-04-08',
    status: 'Processing',
    total: 57980,
    items: [
      {
        id: '2',
        name: 'Blue Star 1 Ton 5 Star Window AC',
        image: 'https://ankurelectricals.com/cdn/shop/files/1_033aa0ae-7973-47b8-ab15-cf90cd64501f.jpg?v=1726122426',
        quantity: 2,
        price: 28990,
      },
    ],
  },
];

export default function Orders() {
  const router = useRouter();

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'text-green-600';
      case 'processing':
        return 'text-yellow-600';
      case 'cancelled':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="p-4">
          <Text className="font-open-sans-bold text-2xl text-gray-900 mb-4">
            My Orders
          </Text>

          {orders.map((order) => (
            <View
              key={order.id}
              className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
              {/* Order Header */}
              <View className="p-4 border-b border-gray-100">
                <View className="flex-row justify-between items-center">
                  <Text className="font-open-sans-semibold text-gray-900">
                    {order.orderNumber}
                  </Text>
                  <Text className={`font-open-sans-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </Text>
                </View>
                <Text className="text-gray-500 text-sm mt-1">
                  Ordered on {new Date(order.date).toLocaleDateString()}
                </Text>
              </View>

              {/* Order Items */}
              {order.items.map((item) => (
                <View key={item.id} className="p-4 flex-row items-center">
                  <Image
                    source={{ uri: item.image }}
                    className="w-20 h-20 rounded-lg"
                    resizeMode="cover"
                  />
                  <View className="flex-1 ml-4">
                    <Text className="font-open-sans-semibold text-gray-900" numberOfLines={2}>
                      {item.name}
                    </Text>
                    <Text className="text-gray-500 text-sm mt-1">
                      Qty: {item.quantity}
                    </Text>
                    <Text className="text-primary font-open-sans-bold mt-1">
                      ₹{item.price.toLocaleString()}
                    </Text>
                  </View>
                </View>
              ))}

              {/* Order Footer */}
              <View className="p-4 bg-gray-50 border-t border-gray-100">
                <View className="flex-row justify-between items-center">
                  <Text className="font-open-sans-semibold text-gray-900">
                    Total Amount
                  </Text>
                  <Text className="text-primary font-open-sans-bold text-lg">
                    ₹{order.total.toLocaleString()}
                  </Text>
                </View>
                <TouchableOpacity
                  className="mt-4 bg-primary rounded-lg py-3"
                  style={{ backgroundColor: COLORS.primary }}
                  onPress={() => router.push(`/order/track?id=${order.id}`)}>
                  <Text className="text-center font-open-sans-semibold text-white">
                    Track Order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
} 