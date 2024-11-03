import { StyleSheet, View } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../styles/colors";

export const LoadingSpinner = () => {
  return (
    <View style={styles.loadingContainer} testID="loading-indicator">
      <ActivityIndicator size="large" color={colors.teal} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
