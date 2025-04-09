import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from 'utils/constants';
import Header from 'components/Header';
import { router } from 'expo-router';

type MenuItem = {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
};

const menuItems: MenuItem[] = [
  {
    id: '1',
    title: 'My Orders',
    icon: 'bag-outline',
    route: '/orders',
  },
  {
    id: '2',
    title: 'Shipping Addresses',
    icon: 'location-outline',
    route: '/home',
  },
  {
    id: '3',
    title: 'Payment Methods',
    icon: 'card-outline',
    route: '/home',
  },
  {
    id: '4',
    title: 'My Reviews',
    icon: 'star-outline',
    route: '/home',
  },
  {
    id: '5',
    title: 'Settings',
    icon: 'settings-outline',
    route: '/home',
  },
];

export default function Profile() {
  return (
    <View className="flex-1 bg-gray-50">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Profile Header */}
        <View className="bg-white p-4">
          <View className="flex-row items-center">
            <Image
              source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png' }}
              className="w-20 h-20 rounded-full"
            />
            <View className="ml-4 flex-1">
              <Text className="font-open-sans-bold text-xl text-gray-900">
                John Doe
              </Text>
              <Text className="text-gray-500">john.doe@example.com</Text>
              <TouchableOpacity
                className="mt-2 bg-gray-100 rounded-full py-1 px-4 self-start">
                <Text className="text-gray-600 font-open-sans-medium">
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Stats Section */}
        <View className="flex-row justify-between p-4 bg-white mt-2">
          <View className="items-center">
            <Text className="font-open-sans-bold text-xl text-gray-900">12</Text>
            <Text className="text-gray-500">Orders</Text>
          </View>
          <View className="items-center">
            <Text className="font-open-sans-bold text-xl text-gray-900">4</Text>
            <Text className="text-gray-500">Reviews</Text>
          </View>
          <View className="items-center">
            <Text className="font-open-sans-bold text-xl text-gray-900">2</Text>
            <Text className="text-gray-500">Addresses</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View className="mt-2 bg-white">
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="flex-row items-center p-4 border-b border-gray-100"
              onPress={() => router.push(item.route)}>
              <View
                className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center">
                <Ionicons name={item.icon} size={20} color={COLORS.primary} />
              </View>
              <Text className="flex-1 ml-3 font-open-sans-medium text-gray-900">
                {item.title}
              </Text>
              <Ionicons name="chevron-forward" size={20} color={COLORS.primary} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          className="mx-4 mt-4 mb-8 bg-red-50 rounded-lg py-4 flex-row items-center justify-center">
          <Ionicons name="log-out-outline" size={20} color="#EF4444" />
          <Text className="ml-2 font-open-sans-medium text-red-500">
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
} 