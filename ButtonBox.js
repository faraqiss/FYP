import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ButtonBox = () => {
  const buttons = ["Dua", "Zikr", "Hadith", "Quran", "Mosque"];

  return (
    <View style={styles.container}>
      {buttons.map((button) => (
        <View key={button} style={styles.button}>
          <Button title={button} onPress={() => console.log(`${button} Pressed`)} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    width: '18%',
  },
});

export default ButtonBox;


