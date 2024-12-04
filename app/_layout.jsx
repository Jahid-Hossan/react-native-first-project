import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "../global.css";

export default function RootLayout() {
  return (
    <View className="justify-center items-center h-screen bg-yellow-300/75">
      <Text className="text-red-600 text-5xl bg-slate-300">
        Open up App.js to start working on your app!!!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
