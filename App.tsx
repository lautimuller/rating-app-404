import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation/MainNavigator";
import { SelectedRepositoriesProvider } from "./src/context/SelectedRepositoriesContext";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#yourColorHere" }}>
    <SelectedRepositoriesProvider>
      <NavigationContainer>
        <StatusBar />
        <MainNavigator />
      </NavigationContainer>
    </SelectedRepositoriesProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
});
