import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import RepositoryItem from "../RepositoryItem";
import { Repository } from "../../../utils/types";

const mockRepository: Repository = {
  name: "Test Repository",
  owner: {
    login: "TestOwner",
    avatar_url: "https://example.com/avatar.png",
    html_url: "",
  },
  html_url: "https://example.com/test-repo",
  stargazers_count: 100,
  id: 0,
  full_name: "",
};

describe("RepositoryItem", () => {
  it("renders correctly with given repository data", () => {
    const { getByTestId } = render(
      <RepositoryItem repository={mockRepository} isSelected={false} />
    );

    expect(getByTestId("repository-name").children[0]).toBe("Test Repository");
    expect(getByTestId("repository-owner").children[0]).toBe("TestOwner");
    expect(getByTestId("repository-stars").children[0]).toBe("100");
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <RepositoryItem
        repository={mockRepository}
        isSelected={false}
        onPress={onPressMock}
      />
    );

    fireEvent.press(getByTestId("repository-item"));
    expect(onPressMock).toHaveBeenCalledWith(mockRepository.html_url);
  });

  it("shows remove button in selected screen", () => {
    const { getByTestId } = render(
      <RepositoryItem
        repository={mockRepository}
        isSelected={false}
        IsInSelectedScreen={true}
      />
    );

    expect(getByTestId("repository-remove-button")).toBeTruthy();
  });

  it("calls onRemove when remove button is pressed", () => {
    const onRemoveMock = jest.fn();
    const { getByTestId } = render(
      <RepositoryItem
        repository={mockRepository}
        isSelected={false}
        IsInSelectedScreen={true}
        onRemove={onRemoveMock}
      />
    );

    fireEvent.press(getByTestId("repository-remove-button"));
    expect(onRemoveMock).toHaveBeenCalledWith(mockRepository);
  });
});
