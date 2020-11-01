import React from 'react';

import { View, StyleSheet } from 'react-native';
import FavoritesEmptyState from './FavoritesEmptyState';
import Http from 'cryptoTracker2/src/libs/http';
import Colors from 'cryptoTracker2/src/res/colors';

const FavoritesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FavoritesEmptyState />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1,
  },
});

export default FavoritesScreen;
