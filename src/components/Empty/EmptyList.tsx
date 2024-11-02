import React from "react";
import { View, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { colors } from "../../styles/colors";
import { Typography } from "../Typography/Typography";

const EmptyList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Typography.Label style={styles.message}>No results</Typography.Label>
      <IconButton icon="emoticon-sad" size={30} iconColor={colors.teal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  message: {
    fontSize: 18,
    marginRight: 8,
    color: colors.gray,
  },
});

export default EmptyList;
