import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PrayerTimes = () => {
  const prayerTimes = {
    Fajr: "05:00 AM",
    Dhuhr: "12:30 PM",
    Asr: "04:00 PM",
    Maghrib: "06:45 PM",
    Isha: "08:00 PM"
  };

  return (
    <View style={styles.container}>
      {Object.entries(prayerTimes).map(([prayer, time]) => (
        <View key={prayer} style={styles.prayerItem}>
          <Text>{prayer}: {time}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  prayerItem: {
    marginVertical: 5,
  },
});

export default PrayerTimes;
