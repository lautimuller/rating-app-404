import React from "react";
import { render } from "@testing-library/react-native";
import { LoadingSpinner } from "../LoadingSpinner";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../../styles/colors";

describe("LoadingSpinner", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<LoadingSpinner />);

    const loadingIndicator = getByTestId("loading-indicator");
    expect(loadingIndicator).toBeTruthy();

    const activityIndicator = loadingIndicator.findByType(ActivityIndicator);
    expect(activityIndicator).toBeTruthy();

    expect(activityIndicator.props.color).toBe(colors.teal);
    expect(activityIndicator.props.size).toBe("large");
  });
});
