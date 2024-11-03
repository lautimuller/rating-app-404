import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "../Button";

describe("Button", () => {
  it("renders correctly with given title", () => {
    const { getByText } = render(
      <Button title="Press me" onPress={() => {}} />
    );
    expect(getByText("Press me")).toBeTruthy();
  });

  it("calls onPress when button is pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Press me" onPress={onPressMock} />
    );
    fireEvent.press(getByText("Press me"));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("applies primary variant styles by default", () => {
    const { getByText } = render(
      <Button title="Press me" onPress={() => {}} />
    );
    const buttonText = getByText("Press me");
    expect(buttonText.props.style).toContainEqual({ color: "#FFFFFF" });
  });

  it("applies secondary variant styles when variant is secondary", () => {
    const { getByText } = render(
      <Button title="Press me" onPress={() => {}} variant="secondary" />
    );
    const buttonText = getByText("Press me");
    expect(buttonText.props.style).toContainEqual({ color: "#007B81" });
  });
});
