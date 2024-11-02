import React from "react";
import { View, StyleSheet } from "react-native";
import { Typography } from "../Typography/Typography";

interface TotalStarsProps {
  totalStars: number;
}

const TotalStars: React.FC<TotalStarsProps> = ({ totalStars }) => {
  return (
    <View style={styles.container}>
      <Typography.Subtitle >Total Stars: </Typography.Subtitle>
      <Typography.Subtitle style={styles.text}>{totalStars} ⭐</Typography.Subtitle>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: 'row'
  },
  text: {
    fontWeight: '600'
  },
});

export default TotalStars;
