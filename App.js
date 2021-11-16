import { StatusBar } from 'expo-status-bar';

import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

// Import Screens
import HomeScreen from './screens/HomeScreen';
import MaintenanceScreen from './screens/MaintenanceScreen';
import StatisticsScreen from './screens/StatisticsScreen';

// Import Navigation
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Stats" component={StatisticsScreen} />
        <Drawer.Screen name="Maintenance" component={MaintenanceScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});