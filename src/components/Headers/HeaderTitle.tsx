import React from "react";
import { View, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { colors } from "../../styles/colors";
import { Typography } from "../Typography/Typography";

const HeaderTitle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <IconButton icon="star" size={30} iconColor={colors.teal} />
        <Typography.Title>Rating App</Typography.Title>
        <IconButton icon="star" size={30} iconColor={colors.teal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HeaderTitle;
