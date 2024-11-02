import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import RepositoryList from "../components/Repository/RepositoryList";
import { useFetch } from "../hooks/useFetch";
import { Repository } from "../utils/types";
import { GITHUB_API_URL } from "../utils/constants";
import TotalStars from "../components/Footers/TotalStars";
import { colors } from "../styles/colors";
import { calculateTotalStars } from "../utils/utils";
import SearchBar from "../components/Bars/SearchBar";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [url, setUrl] = useState(GITHUB_API_URL);
  const { data, loading, error } = useFetch<{ items: Repository[] }>(url);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      setUrl(`${GITHUB_API_URL}?q=${searchQuery}&per_page=20`);
    } else {
      setUrl(GITHUB_API_URL);
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <SearchBar value={searchQuery} onChangeText={handleSearch} />
      <RepositoryList
        repositories={data?.items}
        loading={loading}
        error={error}
      />
      {data?.items && (
        <TotalStars totalStars={calculateTotalStars(data.items)} />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
