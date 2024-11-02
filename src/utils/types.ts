export interface RepositoryOwner {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  owner: RepositoryOwner;
  html_url: string;
  stargazers_count: number;
}

export type RootStackParamList = {
  Home: undefined;
  SelectedScreen: undefined;
};