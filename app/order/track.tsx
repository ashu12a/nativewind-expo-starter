import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from 'utils/constants';
import Header from 'components/Header';
import { router, useLocalSearchParams } from 'expo-router';

// Mock order tracking data
const orderTracking = {
  id: '1',
  orderNumber: '#ORD-2024-001',
  status: 'In Transit',
  estimatedDelivery: '2024-04-12',
  currentLocation: 'Mumbai, Maharashtra',
  trackingSteps: [
    {
      id: '1',
      title: 'Order Placed',
      description: 'Your order has been placed successfully',
      date: '2024-04-09',
      time: '10:30 AM',
      completed: true,
    },
    {
      id: '2',
      title: 'Order Confirmed',
      description: 'Your order has been confirmed',
      date: '2024-04-09',
      time: '11:45 AM',
      completed: true,
    },
    {
      id: '3',
      title: 'Order Shipped',
      description: 'Your order has been shipped from our warehouse',
      date: '2024-04-10',
      time: '02:15 PM',
      completed: true,
    },
    {
      id: '4',
      title: 'In Transit',
      description: 'Your order is on the way to your location',
      date: '2024-04-11',
      time: '09:30 AM',
      completed: true,
    },
    {
      id: '5',
      title: 'Out for Delivery',
      description: 'Your order is out for delivery',
      date: '2024-04-12',
      time: '08:00 AM',
      completed: false,
    },
    {
      id: '6',
      title: 'Delivered',
      description: 'Your order has been delivered',
      date: '2024-04-12',
      time: '12:00 PM',
      completed: false,
    },
  ],
  items: [
    {
      id: '1',
      name: 'Voltas 1.5 Ton 3 Star Inverter Split AC',
      image: 'https://ankurelectricals.com/cdn/shop/files/1_c5b824ed-e0b0-43c9-aba7-d9f5405c3f77_large.png?v=1736941358',
      quantity: 1,
      price: 32990,
    },
  ],
};

export default function TrackOrder() {
  const { id } = useLocalSearchParams();
  
  // In a real app, you would fetch the order tracking data based on the ID
  // For now, we'll use the mock data
  
  return (
    <View className="flex-1 bg-gray-50">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="p-4">
          {/* Order Info Card */}
          <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="font-open-sans-semibold text-gray-900">
                {orderTracking.orderNumber}
              </Text>
              <Text className="font-open-sans-medium text-yellow-600">
                {orderTracking.status}
              </Text>
            </View>
            <Text className="text-gray-500 text-sm">
              Estimated Delivery: {new Date(orderTracking.estimatedDelivery).toLocaleDateString()}
            </Text>
            <Text className="text-gray-500 text-sm mt-1">
              Current Location: {orderTracking.currentLocation}
            </Text>
          </View>
          
          {/* Order Items */}
          <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
            <Text className="font-open-sans-semibold text-gray-900 mb-2">
              Order Items
            </Text>
            {orderTracking.items.map((item) => (
              <View key={item.id} className="flex-row items-center mb-2">
                <Image
                  source={{ uri: item.image }}
                  className="w-16 h-16 rounded-lg"
                  resizeMode="cover"
                />
                <View className="flex-1 ml-3">
                  <Text className="font-open-sans-medium text-gray-900" numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text className="text-gray-500 text-sm">
                    Qty: {item.quantity}
                  </Text>
                  <Text className="text-primary font-open-sans-bold">
                    ₹{item.price.toLocaleString()}
                  </Text>
                </View>
              </View>
            ))}
          </View>
          
          {/* Tracking Timeline */}
          <View className="bg-white rounded-xl shadow-sm p-4">
            <Text className="font-open-sans-semibold text-gray-900 mb-4">
              Tracking Timeline
            </Text>
            
            {orderTracking.trackingSteps.map((step, index) => (
              <View key={step.id} className="flex-row mb-4">
                {/* Timeline Line */}
                <View className="w-6 items-center">
                  <View 
                    className={`w-4 h-4 rounded-full ${
                      step.completed ? 'bg-primary' : 'bg-gray-300'
                    }`} 
                  />
                  {index < orderTracking.trackingSteps.length - 1 && (
                    <View 
                      className={`w-0.5 h-16 ${
                        step.completed ? 'bg-primary' : 'bg-gray-300'
                      }`} 
                    />
                  )}
                </View>
                
                {/* Step Content */}
                <View className="flex-1 ml-2">
                  <View className="flex-row justify-between items-center">
                    <Text className={`font-open-sans-semibold ${
                      step.completed ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </Text>
                    <Text className="text-gray-500 text-xs">
                      {step.date} {step.time}
                    </Text>
                  </View>
                  <Text className="text-gray-500 text-sm mt-1">
                    {step.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
          
          {/* Contact Support Button */}
          <TouchableOpacity
            className="mt-4 bg-primary rounded-lg py-4 flex-row items-center justify-center"
            style={{ backgroundColor: COLORS.primary }}>
            <Ionicons name="headset-outline" size={20} color="white" />
            <Text className="ml-2 text-center font-open-sans-semibold text-white">
              Contact Support
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
} 