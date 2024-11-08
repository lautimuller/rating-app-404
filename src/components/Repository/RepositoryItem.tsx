import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Repository } from "../../utils/types";
import { Typography } from "../Typography/Typography";
import { IconButton } from "react-native-paper";
import { colors } from "../../styles/colors";

interface RepositoryItemProps {
  repository: Repository;
  onPress?: (url: string) => void;
  onSelect?: (repository: Repository) => void;
  onRemove?: (repository: Repository) => void;
  isSelected: boolean;
  IsInSelectedScreen?: boolean;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({
  repository,
  onPress,
  onSelect,
  isSelected,
  IsInSelectedScreen = false,
  onRemove,
}) => {
  return (
    <TouchableOpacity
      testID="repository-item"
      style={[styles.itemContainer, isSelected && styles.selectedItem]}
      onPress={() => onPress?.(repository.html_url)}
      onLongPress={() => onSelect?.(repository)}
    >
      <Image
        testID="repository-avatar" // Agregado para pruebas
        source={{ uri: repository.owner.avatar_url }}
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <Typography.Subtitle testID="repository-name" style={styles.repoName}>
          {repository.name}
        </Typography.Subtitle>
        <Typography.Label testID="repository-owner" style={styles.repoOwner}>
          {repository.owner.login}
        </Typography.Label>
        <Typography.Label testID="repository-stars" style={styles.stars}>
          {repository.stargazers_count} ⭐
        </Typography.Label>
      </View>

      {IsInSelectedScreen && (
        <IconButton
          testID="repository-remove-button" // Agregado para pruebas
          icon="trash-can-outline"
          size={24}
          onPress={() => onRemove?.(repository)}
          style={styles.trashIcon}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.brown20,
    borderRadius: 4,
  },
  selectedItem: {
    backgroundColor: colors.teal45,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  repoName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  repoOwner: {
    color: colors.brown75,
    paddingVertical: 4,
  },
  stars: {
    color: colors.star,
  },
  trashIcon: {
    marginLeft: "auto",
  },
});

export default RepositoryItem;
