import { render } from "@testing-library/react-native";
import React from "react";
import { Typography } from "../Typography";

describe("Testing Typography", () => {
  test("Check if typography renders the text correctly", () => {
    const { queryByText } = render(<Typography.Label>Test 1</Typography.Label>);
    const { queryByText: queryByText2 } = render(
      <Typography.Paragraph>Test 2</Typography.Paragraph>
    );
    const { queryByText: queryByText3 } = render(
      <Typography.Subtitle>Test 3</Typography.Subtitle>
    );
    const { queryByText: queryByText4 } = render(
      <Typography.Title>Test 4</Typography.Title>
    );

    expect(queryByText("Test 1")).toBeTruthy();
    expect(queryByText2("Test 2")).toBeTruthy();
    expect(queryByText3("Test 3")).toBeTruthy();
    expect(queryByText4("Test 4")).toBeTruthy();
  });
});
