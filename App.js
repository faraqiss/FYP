import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './app/src/navigation/AppNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
