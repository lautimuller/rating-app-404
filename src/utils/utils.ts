import { Repository } from "./types";

export const calculateTotalStars = (
  repositories: Repository[] | undefined
): number => {
  return (
    repositories?.reduce((acc, item) => acc + item.stargazers_count, 0) || 0
  );
};
