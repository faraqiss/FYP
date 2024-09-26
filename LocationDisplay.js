import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LocationDisplay = () => {
  const location = "Mecca, Saudi Arabia"; // Static example location

  return (
    <View style={styles.container}>
      <Text style={styles.locationText}>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LocationDisplay;
