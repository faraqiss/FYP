import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ButtonBox from '../components/ButtonBox';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>Islamic Date: 1 Ramadan 1445</Text>
      <Text style={styles.dateText}>Normal Date: 15 March 2024</Text>
      <Text style={styles.locationText}>Location: Your City</Text>
      <Text style={styles.prayerTimesText}>Prayer Times: Fajr, Dhuhr, Asr, Maghrib, Isha</Text>
      <ButtonBox />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 20,
    marginVertical: 10,
  },
  locationText: {
    fontSize: 18,
    marginVertical: 10,
  },
  prayerTimesText: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default HomeScreen;


