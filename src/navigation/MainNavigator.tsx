import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SelectedScreen from "../screens/SelectedScreen";
import { View, StyleSheet, Text } from "react-native";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/colors";
import { useSelectedRepositories } from "../context/SelectedRepositoriesContext";
import { RootStackParamList } from "../utils/types";
import HeaderTitle from "../components/Headers/HeaderTitle";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const navigation = useNavigation();
  const { selectedRepositories } = useSelectedRepositories();

  const handleNavigateToSelected = () => {
    navigation.navigate("SelectedScreen");
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <HeaderTitle />,
          headerRight: () =>
            selectedRepositories.length > 0 ? (
              <View style={styles.iconContainer}>
                <IconButton
                  icon="check-circle"
                  size={30}
                  iconColor={colors.teal}
                  onPress={handleNavigateToSelected}
                />
                {selectedRepositories.length > 0 && (
                  <Text style={styles.selectedCount}>
                    {selectedRepositories.length}
                  </Text>
                )}
              </View>
            ) : null,
        }}
      />
      <Stack.Screen
        name="SelectedScreen"
        component={SelectedScreen}
        options={{ title: "Selected" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  selectedCount: {
    fontSize: 16,
    color: colors.teal,
    fontWeight: "bold",
    marginLeft: -8,
  },
});

export default AppNavigator;
