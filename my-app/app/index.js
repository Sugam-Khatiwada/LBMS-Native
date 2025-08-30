import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function WelcomePage() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  // responsive sizes
  const imageSize = Math.min(140, Math.max(72, Math.floor(width * 0.18)));
  const titleFontSize = width > 900 ? 40 : width > 600 ? 32 : 22;
  const subtitleFontSize = width > 600 ? 18 : 14;

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
      <View className="z-10 items-center px-6" style={{ width: '100%', maxWidth: 900 }}>
        <View style={{ width: imageSize + 28, height: imageSize + 28, borderRadius: (imageSize + 28) / 2, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
          <Image source={require('../assets/icon.png')} style={{ width: Math.floor(imageSize * 0.7), height: Math.floor(imageSize * 0.7), borderRadius: 12 }} />
        </View>

        <Text className="text-white font-bold text-center mb-3" style={{ fontSize: titleFontSize }}>
          Welcome to Bookhub Library
        </Text>

        <Text className="text-white/90 text-center mb-6" style={{ fontSize: subtitleFontSize, lineHeight: subtitleFontSize * 1.4, maxWidth: 760 }}>
          A simple, delightful library management experience — catalog books, manage members, track loans and generate reports from one place.
        </Text>

        <View className="flex-row items-center">
          <TouchableOpacity onPress={handleGetStarted} className="bg-purple-600 px-6 py-3 rounded-lg shadow-lg" activeOpacity={0.85}>
            <Text className="text-white font-semibold">Get Started</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-8 w-full">
          <Text className="text-white/80 text-sm text-center mb-3">Key features</Text>
          <View className="flex-row flex-wrap justify-center gap-3">
            <View className="bg-white/10 px-4 py-3 rounded-xl w-[44%] items-center" style={{ minWidth: 140 }}>
              <Text className="text-white text-lg">🔎</Text>
              <Text className="text-white/90 mt-2 text-center">Smart Catalog Search</Text>
            </View>
            <View className="bg-white/10 px-4 py-3 rounded-xl w-[44%] items-center" style={{ minWidth: 140 }}>
              <Text className="text-white text-lg">📚</Text>
              <Text className="text-white/90 mt-2 text-center">Manage Books</Text>
            </View>
            <View className="bg-white/10 px-4 py-3 rounded-xl w-[44%] items-center" style={{ minWidth: 140 }}>
              <Text className="text-white text-lg">👥</Text>
              <Text className="text-white/90 mt-2 text-center">Members</Text>
            </View>
            <View className="bg-white/10 px-4 py-3 rounded-xl w-[44%] items-center" style={{ minWidth: 140 }}>
              <Text className="text-white text-lg">📈</Text>
              <Text className="text-white/90 mt-2 text-center">Reports</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}