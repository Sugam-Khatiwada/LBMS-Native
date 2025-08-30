import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function WelcomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/login');
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1514679720664-1c6a1a3a8c2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }}
      className="flex-1 justify-center items-center"
      resizeMode="cover"
    >
      {/* Dark overlay for better text readability */}
      <View className="absolute inset-0 bg-black/50" />
      <View className="z-10 items-center px-8">
        <Text className="text-white text-4xl font-bold text-center mb-4">
          Welcome to Library Management System
        </Text>
        <Text className="text-white/90 text-lg text-center mb-8 leading-6">
          Manage catalog, members, loans and reports from one place
        </Text>

        <TouchableOpacity
          onPress={handleGetStarted}
          className="bg-yellow-600 px-8 py-4 rounded-lg shadow-lg"
          activeOpacity={0.8}
        >
          <Text className="text-white text-lg font-semibold">Enter Library</Text>
        </TouchableOpacity>

        <View className="mt-8 items-center">
          <Text className="text-white/80 text-sm">Quick features</Text>
          <View className="flex-row gap-4 mt-3">
            <View className="bg-white/20 px-3 py-2 rounded-full">
              <Text className="text-white">🔎 Catalog Search</Text>
            </View>
            <View className="bg-white/20 px-3 py-2 rounded-full">
              <Text className="text-white">📚 Manage Books</Text>
            </View>
            <View className="bg-white/20 px-3 py-2 rounded-full">
              <Text className="text-white">👥 Members</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}