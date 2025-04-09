import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories, products } from '../../utils/data';
import { COLORS } from 'utils/constants';
import ProductCard from 'components/ProductCard';
import { useRouter } from 'expo-router';
import Header from 'components/Header';
export default function Home() {
  const router = useRouter();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View className="flex-1 bg-white">
      {/* header  */}
      <Header />

      {/* Search Bar using text input  */}
      <View className="relative p-4">
        <TextInput
          placeholder="Search for products, brands and more"
          className="h-12 rounded-full border-2 border-gray-300 px-4"
        />
        <TouchableOpacity className="absolute right-8 top-[80%] -translate-y-1/2">
          <Ionicons name="search" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {/* Main Categories  */}
      <Text className="mb-2 px-4 font-open-sans-semibold text-sm text-gray-900">
        You are searching for
      </Text>
      <View className="flex-row flex-wrap items-center justify-center gap-4">
        {categories?.slice(0, 4).map((category) => (
          <TouchableOpacity
            key={category.id}
            className="h-[70px] w-[70px] overflow-hidden rounded-full bg-white shadow-2xl">
            <Image
              source={{ uri: category.image }}
              className="m-auto h-14 w-14"
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* A carousel for images  */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        className="h-full w-full py-6">
        <View className="w-screen px-4">
          <Image
            source={{
              uri: 'https://ankurelectricals.com/cdn/shop/files/Get_a_FREE_Service_-_Haier.png?v=1744180887',
            }}
            className="h-36 w-full overflow-hidden rounded-lg"
            resizeMode="cover"
          />
        </View>
        <View className="w-screen px-4">
          <Image
            source={{
              uri: 'https://ankurelectricals.com/cdn/shop/files/Get_a_FREE_Service_-_Haier.png?v=1744180887',
            }}
            className="h-36 w-full overflow-hidden rounded-lg"
            resizeMode="cover"
          />
        </View>
      </ScrollView>

      {/* // add products  */}
      <View className="flex-row flex-wrap justify-between items-center px-4">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            {...product} 
            onPress={() => router.push({
              pathname: "/product/[id]",
              params: { id: product.id }
            })} 
          />
        ))}
      </View>
    </View> 
    </ScrollView>
  );
}
