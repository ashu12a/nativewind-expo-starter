import { View, Text, Image, TouchableOpacity } from 'react-native';

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  onPress?: () => void;
}

export default function ProductCard({ id, name, price, image, onPress }: ProductCardProps) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      className="w-[48%] mb-4 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
    >
      <Image 
        source={{ uri: image }}
        className="w-32 h-32 m-auto mt-2"
        resizeMode="cover"
      />
      <View className="p-3">
        <Text className="text-gray-900 font-open-sans-semibold" numberOfLines={2}>
          {name}
        </Text>
        <Text className="text-primary font-open-sans-bold mt-1">
          ₹{price.toLocaleString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
