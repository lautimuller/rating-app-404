import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import RepositoryItem from "../components/Repository/RepositoryItem";
import { useSelectedRepositories } from "../context/SelectedRepositoriesContext";
import { colors } from "../styles/colors";

const SelectedScreen = () => {
  const { selectedRepositories, toggleRepositorySelection } = useSelectedRepositories();

  return (
    <View style={styles.container}>
      {selectedRepositories.length > 0 ? (
        <FlatList
          data={selectedRepositories}
          renderItem={({ item }) => (
            <RepositoryItem
              repository={item}
              isSelected={true}
              IsInSelectedScreen={true}
              onRemove={toggleRepositorySelection}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyText}>No items selected.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: colors.brown45,
  },
});

export default SelectedScreen;
