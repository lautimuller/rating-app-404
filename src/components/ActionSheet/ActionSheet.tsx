import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import Button from "../Buttons/Button";
import { colors } from "../../styles/colors";

interface ActionSheetProps {
  isVisible: boolean;
  title: string;
  description?: string;
  primaryButton: { title: string; onPress: () => void };
  secondaryButton?: { title: string; onPress: () => void };
}

const ActionSheet: React.FC<ActionSheetProps> = ({
  isVisible,
  title,
  description,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          {description && <Text style={styles.description}>{description}</Text>}

          <Button
            title={primaryButton.title}
            onPress={primaryButton.onPress}
            variant="primary"
          />

          {secondaryButton && (
            <Button
              title={secondaryButton.title}
              onPress={secondaryButton.onPress}
              variant="secondary"
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlayBackground,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: colors.white,
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
    paddingBottom: 24
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: colors.brown75,
    textAlign: "center",
    marginBottom: 20,
  },
  secondaryButton: {
    marginTop: 10,
  },
  closeButton: {
    marginTop: 20,
  },
});

export default ActionSheet;
