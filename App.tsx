import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      {/* Title */}
      <Text className="text-3xl font-extrabold text-green-700 mb-4">
        🚀 Welcome to NativeWind
      </Text>

      {/* Subtitle */}
      <Text className="text-lg text-gray-600 mb-6 text-center px-6">
        TailwindCSS is working perfectly with React Native.
      </Text>

      {/* Button */}
      <TouchableOpacity className="px-6 py-3 bg-green-500 rounded-2xl shadow-md active:bg-green-600">
        <Text className="text-white font-semibold text-lg">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
