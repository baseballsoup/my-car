import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';

import BottomTabNavigator from './components/navigation/BottomTabNavigator';
import HeaderDropdown from './components/navigation/HeaderDropdown';
import { Header } from 'react-native/Libraries/NewAppScreen';

const ACTIVE_TAB_COLOR = '#69A6F7'

let cars = [
  {
    "name": "Mazda 6",
    "color": "Silver",
    "type": "Sedan",
    "capacity": 5
  },
  {
    "name": "Acura TL",
    "color": "Red",
    "type": "Sedan",
    "capacity": 5
  },
]

const Drawer = createDrawerNavigator();

export default function App() {
  const car = cars[0]
  

  return (
    <NavigationContainer>
      <HeaderDropdown />
      <BottomTabNavigator car = {car} />
    </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ACTIVE_TAB_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});