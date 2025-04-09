import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from 'utils/constants';
import Header from 'components/Header';
import { router } from 'expo-router';

// Mock cart data
const cartItems = [
  {
    id: '1',
    name: 'Voltas 1.5 Ton 3 Star Inverter Split AC',
    price: 32990,
    image: 'https://ankurelectricals.com/cdn/shop/files/1_c5b824ed-e0b0-43c9-aba7-d9f5405c3f77_large.png?v=1736941358',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Blue Star 1 Ton 5 Star Window AC',
    price: 28990,
    image: 'https://ankurelectricals.com/cdn/shop/files/1_033aa0ae-7973-47b8-ab15-cf90cd64501f.jpg?v=1726122426',
    quantity: 1,
  },
  {
    id: '3',
    name: 'Voltas 1.5 Ton 3 Star Inverter Split AC',
    price: 30990,
    image: 'https://ankurelectricals.com/cdn/shop/files/1_c5b824ed-e0b0-43c9-aba7-d9f5405c3f77_large.png?v=1736941358',
    quantity: 1,
  },
];

export default function Cart() {
  const [items, setItems] = useState(cartItems);
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: string, change: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const discount = 0; // No discount by default
  const total = subtotal + shipping - discount;

  return (
    <View className="flex-1 bg-gray-50">
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="p-4">
          {items.length > 0 ? (
            <>
              {/* Cart Items */}
              <View className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
                {items.map((item, index) => (
                  <View key={item.id}>
                    <View className="p-4 flex-row">
                      <Image
                        source={{ uri: item.image }}
                        className="w-24 h-24 rounded-lg"
                        resizeMode="cover"
                      />
                      <View className="flex-1 ml-4">
                        <Text className="font-open-sans-semibold text-gray-900" numberOfLines={2}>
                          {item.name}
                        </Text>
                        <Text className="text-primary font-open-sans-bold mt-1">
                          ₹{item.price.toLocaleString()}
                        </Text>
                        
                        {/* Quantity Controls */}
                        <View className="flex-row items-center mt-2">
                          <TouchableOpacity
                            onPress={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center">
                            <Ionicons name="remove" size={16} color={COLORS.primary} />
                          </TouchableOpacity>
                          <Text className="mx-3 font-open-sans-medium text-gray-900">
                            {item.quantity}
                          </Text>
                          <TouchableOpacity
                            onPress={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center">
                            <Ionicons name="add" size={16} color={COLORS.primary} />
                          </TouchableOpacity>
                        </View>
                      </View>
                      
                      {/* Remove Button */}
                      <TouchableOpacity
                        onPress={() => removeItem(item.id)}
                        className="ml-2">
                        <Ionicons name="trash-outline" size={20} color="#EF4444" />
                      </TouchableOpacity>
                    </View>
                    
                    {/* Divider */}
                    {index < items.length - 1 && (
                      <View className="h-0.5 bg-gray-100 mx-4" />
                    )}
                  </View>
                ))}
              </View>
              
              {/* Promo Code */}
              <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
                <Text className="font-open-sans-semibold text-gray-900 mb-2">
                  Promo Code
                </Text>
                <View className="flex-row">
                  <TextInput
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChangeText={setPromoCode}
                    className="flex-1 h-12 rounded-l-lg border-2 border-gray-300 px-4"
                  />
                  <TouchableOpacity
                    className="bg-primary rounded-r-lg px-4 items-center justify-center"
                    style={{ backgroundColor: COLORS.primary }}>
                    <Text className="font-open-sans-semibold text-white">
                      Apply
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              {/* Order Summary */}
              <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
                <Text className="font-open-sans-semibold text-gray-900 mb-4">
                  Order Summary
                </Text>
                
                <View className="flex-row justify-between mb-2">
                  <Text className="text-gray-600">Subtotal</Text>
                  <Text className="font-open-sans-medium">₹{subtotal.toLocaleString()}</Text>
                </View>
                
                <View className="flex-row justify-between mb-2">
                  <Text className="text-gray-600">Shipping</Text>
                  <Text className="font-open-sans-medium text-green-600">Free</Text>
                </View>
                
                {discount > 0 && (
                  <View className="flex-row justify-between mb-2">
                    <Text className="text-gray-600">Discount</Text>
                    <Text className="font-open-sans-medium text-green-600">
                      -₹{discount.toLocaleString()}
                    </Text>
                  </View>
                )}
                
                <View className="h-0.5 bg-gray-100 my-2" />
                
                <View className="flex-row justify-between">
                  <Text className="font-open-sans-bold text-gray-900">Total</Text>
                  <Text className="font-open-sans-bold text-primary text-lg">
                    ₹{total.toLocaleString()}
                  </Text>
                </View>
              </View>
              
              {/* Checkout Button */}
              <TouchableOpacity
                className="bg-primary rounded-lg py-4 mb-8"
                style={{ backgroundColor: COLORS.primary }}
                onPress={() => router.push('/checkout')}>
                <Text className="text-center font-open-sans-semibold text-white text-lg">
                  Proceed to Checkout
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            // Empty Cart
            <View className="flex-1 items-center justify-center py-12">
              <Ionicons name="cart-outline" size={80} color={COLORS.primary} />
              <Text className="font-open-sans-semibold text-xl text-gray-900 mt-4">
                Your cart is empty
              </Text>
              <Text className="text-gray-500 text-center mt-2 mb-6">
                Looks like you haven't added any items to your cart yet
              </Text>
              <TouchableOpacity
                className="bg-primary rounded-lg py-3 px-6"
                style={{ backgroundColor: COLORS.primary }}
                onPress={() => router.push('/(tabs)/home')}>
                <Text className="font-open-sans-semibold text-white">
                  Start Shopping
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
} 