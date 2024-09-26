import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateDisplay = () => {
  const islamicDate = "1st Muharram 1445"; // Example static data
  const normalDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.islamicDate}>{islamicDate}</Text>
      <Text style={styles.normalDate}>{normalDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  islamicDate: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  normalDate: {
    fontSize: 18,
    color: 'gray',
  },
});

