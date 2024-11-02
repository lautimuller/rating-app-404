import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { Typography } from "../Typography/Typography";

interface ErrorProps {
  message: string | undefined;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.errorTextContainer}>
        <Typography.Subtitle style={styles.errorText}>
          {message}
        </Typography.Subtitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  errorTextContainer: {
    backgroundColor: colors.dangerLight,
    borderColor: colors.dangerLight,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 44,
    marginBottom: 44,
  },
  errorText: {
    color: colors.danger,
    fontWeight: "bold",
  },
});

export default Error;
