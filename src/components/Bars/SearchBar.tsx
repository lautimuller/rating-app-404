import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  error?: Error | null;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText, error }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search repositories"
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#aaa"
        />
      </View>
      {error && <Text style={styles.errorText}>{error.message}</Text>}
      {value.length > 0 && value.length < 3 && (
        <Text style={styles.errorText}>Please enter at least 3 characters</Text>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: 8,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      borderRadius: 25,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    icon: {
      marginRight: 8,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: colors.black,
      height: 32,
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginTop: 4,
    },
  });
  