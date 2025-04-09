import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { COLORS } from 'utils/constants';
import { products } from 'utils/data';
import Header from 'components/Header';
import ProductCard from 'components/ProductCard';
import { router, useLocalSearchParams } from 'expo-router';

export default function ProductPage() {
  const { id } = useLocalSearchParams();
  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View className="flex-1 bg-white">
          <Header />
          <View className="flex-1 p-4">
            <Image
              source={{ uri: product.image }}
              className="h-72 w-full"
              resizeMode="contain"
            />
            <View className="mt-4">
              <Text className="font-open-sans-semibold text-2xl text-gray-900">
                {product.name}
              </Text>
              <Text className="text-primary mt-2 font-open-sans-bold text-xl">
                ₹{product.price.toLocaleString()}
              </Text>
              <Text className="mt-4 text-gray-600">Category: {product.category}</Text>
            </View>
            <TouchableOpacity
              className="bg-primary mt-8 rounded-lg py-4"
              style={{ backgroundColor: COLORS.primary }}>
              <Text className="text-center font-open-sans-semibold text-lg text-white">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text className="mb-2 mt-4 px-4 font-open-sans-semibold text-xl text-gray-900">
        Related Products
      </Text>
      <View className="flex-row flex-wrap items-center justify-between px-4">
        {relatedProducts.map((relatedProduct) => (
          <ProductCard 
            key={relatedProduct.id} 
            {...relatedProduct} 
            onPress={() => router.push(`/product/${relatedProduct.id}`)} 
          />
        ))}
      </View>
    </ScrollView> 
  );
}
