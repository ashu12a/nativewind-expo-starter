import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { categories } from '../../utils/data';
import Header from 'components/Header';

export default function Category() {
  return (
    <View className="flex-1 bg-white">
      <Header />
      <ScrollView className="flex-1 px-2">
        <View className="flex-row flex-wrap gap- justify-between items-center px-3">
          {categories.map((category) => (
            <TouchableOpacity 
              key={category.id}
              className="w-[48%] mb-4 p-4 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden"
            >
              <Image 
                source={{ uri: category.image }}
                className="w-28 h-28 m-auto"
                resizeMode="cover"
              />
              <View className="px-3 pt-3">
                <Text className="text-gray-900 text-center font-open-sans-semibold">{category.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
