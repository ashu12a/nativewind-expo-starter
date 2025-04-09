import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Header() {
  return (
    <View>
      <View className="h-18 -mt-2 flex-row items-center justify-between border-b border-gray-200 bg-white px-4">
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 150, height: 80 }}
          resizeMode="contain"
          className="-mb-2"
        />
        <Text className="text-2xl font-bold text-gray-900">
          {/* cart icon using expo icons  */}
          <Pressable onPress={() => router.push('/cart')}>
          <Ionicons name="cart" size={24} color="black" />
          </Pressable>
        </Text>
      </View>
    </View>
  )
}