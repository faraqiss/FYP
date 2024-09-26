import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QiblaScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.locationText}>Your Location</Text>
      <Text style={styles.qiblaDirection}>Qibla Direction: 45°</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 20,
    marginBottom: 20,
  },
  qiblaDirection: {
    fontSize: 20,
  },
});

export default QiblaScreen;


