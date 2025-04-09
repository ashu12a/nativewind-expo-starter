import { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { router } from 'expo-router'

export default function index() {
  // redirect home after 1 second
  useEffect(() => {
    setTimeout(() => {
      router.replace('/(tabs)/home');
    }, 1000)
  }, [])

  return (
    <View className='bg-gray-50 flex-1 justify-center items-center'>
      <Image 
        source={require('../assets/images/logo.png')}
        style={{ width: 250, height: 250 }}
        resizeMode="contain"
      />
    </View>
  )
}