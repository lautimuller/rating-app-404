import React from "react";
import { View, StyleSheet, FlatList, Linking } from "react-native";
import { Repository } from "../../utils/types";
import RepositoryItem from "./RepositoryItem";
import { LoadingSpinner } from "../Loading/LoadingSpinner";
import EmptyList from "../Empty/EmptyList";
import Error from "../Errors/Error";
import { colors } from "../../styles/colors";
import { useSelectedRepositories } from "../../context/SelectedRepositoriesContext";

interface RepositoryListProps {
  repositories: Repository[] | undefined;
  loading: boolean;
  error: Error | null;
}

const RepositoryList: React.FC<RepositoryListProps> = ({
  repositories,
  loading,
  error,
}) => {
  const { selectedRepositories, toggleRepositorySelection } =
    useSelectedRepositories();

  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const renderError = () => (
    <View style={styles.errorContainer}>
      <Error message={error?.message} />
    </View>
  );

  const renderLoading = () => (
    <View style={styles.loadingContainer}>
      <LoadingSpinner />
    </View>
  );

  const renderEmptyState = () => <EmptyList />;

  const sortedRepositories = repositories?.sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );

  return (
    <View style={styles.container}>
      {loading && renderLoading()}
      {error && renderError()}
      {!loading && !error && !repositories?.length && renderEmptyState()}

      {!loading && !error && repositories && repositories?.length > 0 && (
        <FlatList
          data={sortedRepositories}
          renderItem={({ item }) => (
            <RepositoryItem
              repository={item}
              onPress={handlePress}
              onSelect={toggleRepositorySelection}
              isSelected={
                !!selectedRepositories.find((repo) => repo.id === item.id)
              }
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: colors.danger,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noResults: {
    textAlign: "center",
    marginVertical: 20,
    color: colors.gray,
  },
});

export default RepositoryList;
