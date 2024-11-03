import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ActionSheet from "../ActionSheet";
import { colors } from "../../../styles/colors";

describe("ActionSheet", () => {
  const primaryButtonMock = { title: "Primary Action", onPress: jest.fn() };
  const secondaryButtonMock = { title: "Secondary Action", onPress: jest.fn() };

  it("renders correctly when isVisible is true", () => {
    const { getByText } = render(
      <ActionSheet
        isVisible={true}
        title="Test Title"
        primaryButton={primaryButtonMock}
      />
    );
    expect(getByText("Test Title")).toBeTruthy();
  });

  it("does not render when isVisible is false", () => {
    const { queryByText } = render(
      <ActionSheet
        isVisible={false}
        title="Test Title"
        primaryButton={primaryButtonMock}
      />
    );
    expect(queryByText("Test Title")).toBeNull();
  });

  it("renders description when provided", () => {
    const { getByText } = render(
      <ActionSheet
        isVisible={true}
        title="Test Title"
        description="Test Description"
        primaryButton={primaryButtonMock}
      />
    );
    expect(getByText("Test Description")).toBeTruthy();
  });

  it("renders only the primary button if secondary button is not provided", () => {
    const { getByText, queryByText } = render(
      <ActionSheet
        isVisible={true}
        title="Test Title"
        primaryButton={primaryButtonMock}
      />
    );
    expect(getByText("Primary Action")).toBeTruthy();
    expect(queryByText("Secondary Action")).toBeNull();
  });

  it("renders both primary and secondary buttons when both are provided", () => {
    const { getByText } = render(
      <ActionSheet
        isVisible={true}
        title="Test Title"
        primaryButton={primaryButtonMock}
        secondaryButton={secondaryButtonMock}
      />
    );
    expect(getByText("Primary Action")).toBeTruthy();
    expect(getByText("Secondary Action")).toBeTruthy();
  });

  it("calls primary button onPress when pressed", () => {
    const { getByText } = render(
      <ActionSheet
        isVisible={true}
        title="Test Title"
        primaryButton={primaryButtonMock}
      />
    );
    fireEvent.press(getByText("Primary Action"));
    expect(primaryButtonMock.onPress).toHaveBeenCalled();
  });

  it("calls secondary button onPress when pressed", () => {
    const { getByText } = render(
      <ActionSheet
        isVisible={true}
        title="Test Title"
        primaryButton={primaryButtonMock}
        secondaryButton={secondaryButtonMock}
      />
    );
    fireEvent.press(getByText("Secondary Action"));
    expect(secondaryButtonMock.onPress).toHaveBeenCalled();
  });

  it("applies correct styles for container and overlay", () => {
    const { getByText } = render(
      <ActionSheet
        isVisible={true}
        title="Styled Test"
        primaryButton={primaryButtonMock}
      />
    );
    const titleText = getByText("Styled Test");
    expect(titleText.props.style).toMatchObject({
      color: colors.black,
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    });
  });
});
