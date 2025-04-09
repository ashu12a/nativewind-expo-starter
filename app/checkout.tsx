import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
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
    quantity: 1,
  },
  {
    id: '2',
    name: 'Blue Star 1 Ton 5 Star Window AC',
    price: 28990,
    quantity: 1,
  },
];

export default function Checkout() {
  const [activeTab, setActiveTab] = useState('shipping');
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('card');

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const discount = 0; // No discount by default
  const total = subtotal + shipping - discount;

  const handlePlaceOrder = () => {
    // In a real app, you would process the order here
    // For now, we'll just navigate to the order confirmation page
    router.push('/order/confirmation');
  };

  return (
    <View className="flex-1 bg-gray-50">
      <Header title="Checkout" showBackButton={true} />
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="p-4">
          {/* Tabs */}
          <View className="flex-row bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <TouchableOpacity
              className={`flex-1 py-3 items-center ${
                activeTab === 'shipping' ? 'bg-primary' : 'bg-white'
              }`}
              style={
                activeTab === 'shipping'
                  ? { backgroundColor: COLORS.primary }
                  : undefined
              }
              onPress={() => setActiveTab('shipping')}>
              <Text
                className={`font-open-sans-medium ${
                  activeTab === 'shipping' ? 'text-white' : 'text-gray-600'
                }`}>
                Shipping
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 py-3 items-center ${
                activeTab === 'payment' ? 'bg-primary' : 'bg-white'
              }`}
              style={
                activeTab === 'payment'
                  ? { backgroundColor: COLORS.primary }
                  : undefined
              }
              onPress={() => setActiveTab('payment')}>
              <Text
                className={`font-open-sans-medium ${
                  activeTab === 'payment' ? 'text-white' : 'text-gray-600'
                }`}>
                Payment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 py-3 items-center ${
                activeTab === 'review' ? 'bg-primary' : 'bg-white'
              }`}
              style={
                activeTab === 'review'
                  ? { backgroundColor: COLORS.primary }
                  : undefined
              }
              onPress={() => setActiveTab('review')}>
              <Text
                className={`font-open-sans-medium ${
                  activeTab === 'review' ? 'text-white' : 'text-gray-600'
                }`}>
                Review
              </Text>
            </TouchableOpacity>
          </View>

          {/* Shipping Form */}
          {activeTab === 'shipping' && (
            <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
              <Text className="font-open-sans-semibold text-gray-900 mb-4">
                Shipping Information
              </Text>
              
              <View className="mb-3">
                <Text className="text-gray-600 mb-1">Full Name</Text>
                <TextInput
                  placeholder="Enter your full name"
                  value={shippingAddress.fullName}
                  onChangeText={(text) => setShippingAddress({...shippingAddress, fullName: text})}
                  className="h-12 rounded-lg border-2 border-gray-300 px-4"
                />
              </View>
              
              <View className="mb-3">
                <Text className="text-gray-600 mb-1">Address</Text>
                <TextInput
                  placeholder="Enter your address"
                  value={shippingAddress.address}
                  onChangeText={(text) => setShippingAddress({...shippingAddress, address: text})}
                  className="h-12 rounded-lg border-2 border-gray-300 px-4"
                />
              </View>
              
              <View className="flex-row mb-3">
                <View className="flex-1 mr-2">
                  <Text className="text-gray-600 mb-1">City</Text>
                  <TextInput
                    placeholder="City"
                    value={shippingAddress.city}
                    onChangeText={(text) => setShippingAddress({...shippingAddress, city: text})}
                    className="h-12 rounded-lg border-2 border-gray-300 px-4"
                  />
                </View>
                <View className="flex-1 ml-2">
                  <Text className="text-gray-600 mb-1">State</Text>
                  <TextInput
                    placeholder="State"
                    value={shippingAddress.state}
                    onChangeText={(text) => setShippingAddress({...shippingAddress, state: text})}
                    className="h-12 rounded-lg border-2 border-gray-300 px-4"
                  />
                </View>
              </View>
              
              <View className="flex-row mb-3">
                <View className="flex-1 mr-2">
                  <Text className="text-gray-600 mb-1">PIN Code</Text>
                  <TextInput
                    placeholder="PIN Code"
                    value={shippingAddress.pincode}
                    onChangeText={(text) => setShippingAddress({...shippingAddress, pincode: text})}
                    className="h-12 rounded-lg border-2 border-gray-300 px-4"
                    keyboardType="numeric"
                  />
                </View>
                <View className="flex-1 ml-2">
                  <Text className="text-gray-600 mb-1">Phone</Text>
                  <TextInput
                    placeholder="Phone Number"
                    value={shippingAddress.phone}
                    onChangeText={(text) => setShippingAddress({...shippingAddress, phone: text})}
                    className="h-12 rounded-lg border-2 border-gray-300 px-4"
                    keyboardType="phone-pad"
                  />
                </View>
              </View>
              
              <TouchableOpacity
                className="bg-primary rounded-lg py-3 mt-2"
                style={{ backgroundColor: COLORS.primary }}
                onPress={() => setActiveTab('payment')}>
                <Text className="text-center font-open-sans-semibold text-white">
                  Continue to Payment
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Payment Form */}
          {activeTab === 'payment' && (
            <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
              <Text className="font-open-sans-semibold text-gray-900 mb-4">
                Payment Method
              </Text>
              
              <TouchableOpacity
                className={`flex-row items-center p-3 rounded-lg border-2 mb-3 ${
                  paymentMethod === 'card' ? 'border-primary' : 'border-gray-300'
                }`}
                onPress={() => setPaymentMethod('card')}>
                <View className={`w-6 h-6 rounded-full items-center justify-center mr-3 ${
                  paymentMethod === 'card' ? 'bg-primary' : 'bg-gray-200'
                }`}>
                  {paymentMethod === 'card' && (
                    <Ionicons name="checkmark" size={16} color="white" />
                  )}
                </View>
                <Ionicons name="card-outline" size={24} color={COLORS.primary} />
                <Text className="font-open-sans-medium text-gray-900 ml-3">
                  Credit/Debit Card
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                className={`flex-row items-center p-3 rounded-lg border-2 mb-3 ${
                  paymentMethod === 'upi' ? 'border-primary' : 'border-gray-300'
                }`}
                onPress={() => setPaymentMethod('upi')}>
                <View className={`w-6 h-6 rounded-full items-center justify-center mr-3 ${
                  paymentMethod === 'upi' ? 'bg-primary' : 'bg-gray-200'
                }`}>
                  {paymentMethod === 'upi' && (
                    <Ionicons name="checkmark" size={16} color="white" />
                  )}
                </View>
                <Ionicons name="phone-portrait-outline" size={24} color={COLORS.primary} />
                <Text className="font-open-sans-medium text-gray-900 ml-3">
                  UPI Payment
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                className={`flex-row items-center p-3 rounded-lg border-2 ${
                  paymentMethod === 'cod' ? 'border-primary' : 'border-gray-300'
                }`}
                onPress={() => setPaymentMethod('cod')}>
                <View className={`w-6 h-6 rounded-full items-center justify-center mr-3 ${
                  paymentMethod === 'cod' ? 'bg-primary' : 'bg-gray-200'
                }`}>
                  {paymentMethod === 'cod' && (
                    <Ionicons name="checkmark" size={16} color="white" />
                  )}
                </View>
                <Ionicons name="cash-outline" size={24} color={COLORS.primary} />
                <Text className="font-open-sans-medium text-gray-900 ml-3">
                  Cash on Delivery
                </Text>
              </TouchableOpacity>
              
              <View className="flex-row mt-4">
                <TouchableOpacity
                  className="flex-1 border-2 border-gray-300 rounded-lg py-3 mr-2"
                  onPress={() => setActiveTab('shipping')}>
                  <Text className="text-center font-open-sans-semibold text-gray-600">
                    Back
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-1 bg-primary rounded-lg py-3 ml-2"
                  style={{ backgroundColor: COLORS.primary }}
                  onPress={() => setActiveTab('review')}>
                  <Text className="text-center font-open-sans-semibold text-white">
                    Continue to Review
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Review Order */}
          {activeTab === 'review' && (
            <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
              <Text className="font-open-sans-semibold text-gray-900 mb-4">
                Review Order
              </Text>
              
              {/* Shipping Address */}
              <View className="mb-4">
                <Text className="font-open-sans-medium text-gray-900 mb-1">
                  Shipping Address
                </Text>
                <Text className="text-gray-600">
                  {shippingAddress.fullName || 'Your Name'}
                </Text>
                <Text className="text-gray-600">
                  {shippingAddress.address || 'Your Address'}
                </Text>
                <Text className="text-gray-600">
                  {shippingAddress.city || 'City'}, {shippingAddress.state || 'State'} {shippingAddress.pincode || 'PIN'}
                </Text>
                <Text className="text-gray-600">
                  {shippingAddress.phone || 'Phone Number'}
                </Text>
              </View>
              
              {/* Order Items */}
              <View className="mb-4">
                <Text className="font-open-sans-medium text-gray-900 mb-2">
                  Order Items
                </Text>
                {cartItems.map((item) => (
                  <View key={item.id} className="flex-row justify-between mb-1">
                    <Text className="text-gray-600">
                      {item.name} x {item.quantity}
                    </Text>
                    <Text className="font-open-sans-medium">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </Text>
                  </View>
                ))}
              </View>
              
              {/* Payment Method */}
              <View className="mb-4">
                <Text className="font-open-sans-medium text-gray-900 mb-1">
                  Payment Method
                </Text>
                <Text className="text-gray-600">
                  {paymentMethod === 'card' && 'Credit/Debit Card'}
                  {paymentMethod === 'upi' && 'UPI Payment'}
                  {paymentMethod === 'cod' && 'Cash on Delivery'}
                </Text>
              </View>
              
              {/* Order Summary */}
              <View className="border-t border-gray-200 pt-3">
                <View className="flex-row justify-between mb-1">
                  <Text className="text-gray-600">Subtotal</Text>
                  <Text className="font-open-sans-medium">₹{subtotal.toLocaleString()}</Text>
                </View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-gray-600">Shipping</Text>
                  <Text className="font-open-sans-medium text-green-600">Free</Text>
                </View>
                {discount > 0 && (
                  <View className="flex-row justify-between mb-1">
                    <Text className="text-gray-600">Discount</Text>
                    <Text className="font-open-sans-medium text-green-600">
                      -₹{discount.toLocaleString()}
                    </Text>
                  </View>
                )}
                <View className="h-0.5 bg-gray-200 my-2" />
                <View className="flex-row justify-between">
                  <Text className="font-open-sans-bold text-gray-900">Total</Text>
                  <Text className="font-open-sans-bold text-primary text-lg">
                    ₹{total.toLocaleString()}
                  </Text>
                </View>
              </View>
              
              <View className="flex-row mt-4">
                <TouchableOpacity
                  className="flex-1 border-2 border-gray-300 rounded-lg py-3 mr-2"
                  onPress={() => setActiveTab('payment')}>
                  <Text className="text-center font-open-sans-semibold text-gray-600">
                    Back
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-1 bg-primary rounded-lg py-3 ml-2"
                  style={{ backgroundColor: COLORS.primary }}
                  onPress={handlePlaceOrder}>
                  <Text className="text-center font-open-sans-semibold text-white">
                    Place Order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
} 