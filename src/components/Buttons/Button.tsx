import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ title, onPress, variant = "primary" }) => {
  const isPrimary = variant === "primary";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, isPrimary ? styles.primaryButton : styles.secondaryButton]}
    >
      <Text style={[styles.text, isPrimary ? styles.primaryText : styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,  
    borderRadius: 5,
    borderWidth: 1,
    width: '100%',
    marginVertical: 6
  },
  primaryButton: {
    backgroundColor: colors.teal,
    borderColor: colors.teal,
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderColor: colors.teal,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  primaryText: {
    color: colors.white,
  },
  secondaryText: {
    color: colors.teal,
  },
});

export default Button;