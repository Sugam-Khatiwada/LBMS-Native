import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function DashboardPage() {
  const router = useRouter();
 
  const handleLogout = () => {
    router.push('/');
  };
 
  const menuItems = [
  { title: 'Members', icon: '�', route: '/members' },
  { title: 'Loans', icon: '�', route: '/loans' },
  { title: 'Reservations', icon: '🗓️', route: '/reservations' },
  { title: 'Reports', icon: '📊', route: '/reports' },
  ];
 
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-purple-700 pt-12 pb-8 px-6">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-white text-2xl font-bold">Bookhub Library</Text>
            <Text className="text-purple-100 mt-1">Dashboard</Text>
          </View>
          <TouchableOpacity
            onPress={handleLogout}
            className="bg-purple-800 px-4 py-2 rounded-lg"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="p-6">
        <View className="bg-white rounded-2xl p-4 shadow-md mb-6">
          <View className="flex-row items-center">
            <Image source={require('../assets/icon.png')} style={{ width: 56, height: 56, borderRadius: 10, marginRight: 12 }} />
            <View>
              <Text className="text-lg font-bold">Welcome back</Text>
              <Text className="text-gray-600 mt-1">Quick access to members, loans and reports</Text>
            </View>
          </View>

          {/* Stats row */}
          <View className="flex-row justify-between mt-4">
            <View className="bg-purple-50 p-3 rounded-xl items-center w-[32%]">
              <Text className="text-2xl font-bold text-purple-700">1,240</Text>
              <Text className="text-sm text-gray-600 mt-1">Members</Text>
            </View>
            <View className="bg-purple-50 p-3 rounded-xl items-center w-[32%]">
              <Text className="text-2xl font-bold text-purple-700">132</Text>
              <Text className="text-sm text-gray-600 mt-1">Active Loans</Text>
            </View>
            <View className="bg-purple-50 p-3 rounded-xl items-center w-[32%]">
              <Text className="text-2xl font-bold text-purple-700">7</Text>
              <Text className="text-sm text-gray-600 mt-1">Overdues</Text>
            </View>
          </View>
        </View>

        <Text className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</Text>

        <View className="flex-row flex-wrap justify-between">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => item.route && router.push(item.route)}
              className="bg-white p-4 rounded-xl shadow-sm mb-4 w-[48%]"
              activeOpacity={0.8}
            >
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-purple-50 rounded-lg items-center justify-center mr-3">
                  <Text className="text-xl">{item.icon}</Text>
                </View>
                <View>
                  <Text className="text-gray-800 font-medium">{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View className="bg-white rounded-xl p-6 shadow-sm mt-4">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Recent Activity</Text>
          <View className="space-y-3">
            <View className="flex-row items-center py-2">
              <View className="w-2 h-2 bg-green-500 rounded-full mr-3" />
              <Text className="text-gray-600 flex-1">Member registered: John Doe</Text>
              <Text className="text-gray-400 text-sm">5 min ago</Text>
            </View>
            <View className="flex-row items-center py-2">
              <View className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
              <Text className="text-gray-600 flex-1">Loan processed for member #129</Text>
              <Text className="text-gray-400 text-sm">30 min ago</Text>
            </View>
            <View className="flex-row items-center py-2">
              <View className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
              <Text className="text-gray-600 flex-1">Reservation confirmed</Text>
              <Text className="text-gray-400 text-sm">2 hours ago</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}