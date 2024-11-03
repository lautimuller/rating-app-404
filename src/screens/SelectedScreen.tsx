import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import RepositoryItem from "../components/Repository/RepositoryItem";
import { useSelectedRepositories } from "../context/SelectedRepositoriesContext";
import { colors } from "../styles/colors";
import { Repository } from "../utils/types";
import ActionSheet from "../components/ActionSheet/ActionSheet";

const SelectedScreen = () => {
  const { selectedRepositories, toggleRepositorySelection } =
    useSelectedRepositories();
  const [isActionSheetVisible, setIsActionSheetVisible] = useState(false);
  const [repositoryToRemove, setRepositoryToRemove] =
    useState<Repository | null>(null);

  const handleRemoveRequest = (repository: Repository) => {
    setRepositoryToRemove(repository);
    setIsActionSheetVisible(true);
  };

  const confirmRemoveRepository = () => {
    if (repositoryToRemove) {
      toggleRepositorySelection(repositoryToRemove);
      setRepositoryToRemove(null);
    }
    setIsActionSheetVisible(false);
  };

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
              onRemove={() => handleRemoveRequest(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyText}>No items selected.</Text>
      )}

      <ActionSheet
        isVisible={isActionSheetVisible}
        title="Confirm Removal"
        description="Are you sure you want to remove this repository from the list?"
        primaryButton={{ title: "Remove", onPress: confirmRemoveRepository }}
        secondaryButton={{
          title: "Cancel",
          onPress: () => setIsActionSheetVisible(false),
        }}
      />
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
