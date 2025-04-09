import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from 'utils/constants';
import Header from 'components/Header';
import { router } from 'expo-router';

export default function OrderConfirmation() {
  const orderNumber = 'ORD' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  
  return (
    <View className="flex-1 bg-gray-50">
      <Header title="Order Confirmed" showBackButton={true} />
      <View className="flex-1 p-4">
        <View className="bg-white rounded-xl shadow-sm p-6 items-center mb-4">
          <View className="w-20 h-20 bg-green-100 rounded-full items-center justify-center mb-4">
            <Ionicons name="checkmark" size={40} color={COLORS.primary} />
          </View>
          <Text className="font-open-sans-bold text-gray-900 text-xl mb-2">
            Order Confirmed!
          </Text>
          <Text className="text-gray-600 text-center mb-4">
            Thank you for your purchase. Your order has been received and is being processed.
          </Text>
          <View className="bg-gray-50 rounded-lg p-4 w-full mb-4">
            <Text className="text-gray-600 mb-1">Order Number</Text>
            <Text className="font-open-sans-bold text-gray-900 text-lg">
              {orderNumber}
            </Text>
          </View>
          <Text className="text-gray-600 text-center">
            We'll send you an email with your order details and tracking information.
          </Text>
        </View>

        <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <Text className="font-open-sans-semibold text-gray-900 mb-4">
            What's Next?
          </Text>
          
          <View className="flex-row items-center mb-4">
            <View className="w-10 h-10 bg-primary rounded-full items-center justify-center mr-3">
              <Ionicons name="mail-outline" size={20} color="white" />
            </View>
            <View className="flex-1">
              <Text className="font-open-sans-medium text-gray-900">
                Order Confirmation Email
              </Text>
              <Text className="text-gray-600">
                You'll receive an email with your order details
              </Text>
            </View>
          </View>
          
          <View className="flex-row items-center mb-4">
            <View className="w-10 h-10 bg-primary rounded-full items-center justify-center mr-3">
              <Ionicons name="cube-outline" size={20} color="white" />
            </View>
            <View className="flex-1">
              <Text className="font-open-sans-medium text-gray-900">
                Order Processing
              </Text>
              <Text className="text-gray-600">
                We'll start preparing your order for shipping
              </Text>
            </View>
          </View>
          
          <View className="flex-row items-center">
            <View className="w-10 h-10 bg-primary rounded-full items-center justify-center mr-3">
              <Ionicons name="car-outline" size={20} color="white" />
            </View>
            <View className="flex-1">
              <Text className="font-open-sans-medium text-gray-900">
                Shipping Updates
              </Text>
              <Text className="text-gray-600">
                Track your order status in real-time
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row">
          <TouchableOpacity
            className="flex-1 border-2 border-gray-300 rounded-lg py-3 mr-2"
            onPress={() => router.push('/home')}>
            <Text className="text-center font-open-sans-semibold text-gray-600">
              Continue Shopping
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 bg-primary rounded-lg py-3 ml-2"
            style={{ backgroundColor: COLORS.primary }}
            onPress={() => router.push('/order/track')}>
            <Text className="text-center font-open-sans-semibold text-white">
              Track Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
} 