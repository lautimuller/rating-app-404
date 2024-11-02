import React, { createContext, useContext, useState } from "react";
import { Repository } from "../utils/types";

interface SelectedRepositoriesContextProps {
  selectedRepositories: Repository[];
  toggleRepositorySelection: (repository: Repository) => void;
}

const SelectedRepositoriesContext = createContext<
  SelectedRepositoriesContextProps | undefined
>(undefined);

export const SelectedRepositoriesProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selectedRepositories, setSelectedRepositories] = useState<
    Repository[]
  >([]);

  const toggleRepositorySelection = (repository: Repository) => {
    setSelectedRepositories((prevSelected) => {
      if (prevSelected.find((item) => item.id === repository.id)) {
        return prevSelected.filter((item) => item.id !== repository.id);
      } else {
        return [...prevSelected, repository];
      }
    });
  };

  return (
    <SelectedRepositoriesContext.Provider
      value={{ selectedRepositories, toggleRepositorySelection }}
    >
      {children}
    </SelectedRepositoriesContext.Provider>
  );
};

export const useSelectedRepositories = () => {
  const context = useContext(SelectedRepositoriesContext);
  if (!context) {
    throw new Error(
      "useSelectedRepositories must be used within a SelectedRepositoriesProvider"
    );
  }
  return context;
};
