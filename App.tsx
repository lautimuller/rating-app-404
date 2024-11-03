import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation/MainNavigator";
import { SelectedRepositoriesProvider } from "./src/context/SelectedRepositoriesContext";

export default function App() {
  return (
    <SelectedRepositoriesProvider>
      <NavigationContainer>
        <StatusBar />
        <MainNavigator />
      </NavigationContainer>
    </SelectedRepositoriesProvider>
  );
}
