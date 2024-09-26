// app/_layout.js

import React from 'react';
import { View, StyleSheet } from 'react-native';

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // You can change this to your desired background color
  },
});

export default Layout;
