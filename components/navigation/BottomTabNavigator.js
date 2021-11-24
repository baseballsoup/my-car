import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from "@expo/vector-icons";

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import MaintenanceScreen from '../screens/MaintenanceScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import CarScreen from '../screens/CarScreen';


const ACTIVE_TAB_COLOR = '#69A6F7'
const INACTIVE_TAB_COLOR = '#aaa'

const headerStyles = {
  headerTintColor: '#fff',
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: ACTIVE_TAB_COLOR,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 }
  }
}


const Tab = createBottomTabNavigator()

const BottomTabNavigator = (props, {navigation}) => {
    // TODO: Need something to be passed into this function to get the valid car data
    const car_name = props.car.name

    return (
      <Tab.Navigator
        screenOptions={{
          ...headerStyles
        }}
      >
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          initialParams = {{ name : car_name }}
          options={{
            tabBarOptions: {
              activeTintColor: ACTIVE_TAB_COLOR,
            },
            tabBarIcon: (tabInfo) => {
              return (
                <FontAwesome5
                  name="home"
                  size={24}
                  color={tabInfo.focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                />
              );
            },
        }}/>
  
        <Tab.Screen 
          name="Statistics"
          component={StatisticsScreen}
          initialParams = {{ name : car_name}}
          options={{
              tabBarOptions: {
              activeTintColor: ACTIVE_TAB_COLOR,
            },
            tabBarIcon: (tabInfo) => {
              return (
                <FontAwesome5
                  name="chart-area"
                  size={24}
                  color={tabInfo.focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                />
              );
            },
        }}/>
  
        <Tab.Screen 
          name="Maintenance"
          component={MaintenanceScreen}
          initialParams = {{ name : car_name}}
          options={{
          
            tabBarOptions: {
              activeTintColor: ACTIVE_TAB_COLOR,
            },
            tabBarIcon: (tabInfo) => {
              return (
                <FontAwesome5
                  name="tools"
                  size={24}
                  color={tabInfo.focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                />
              );
            },
            
        }}/> 

        <Tab.Screen 
          name="Cars"
          component={CarScreen}
          options={{
            tabBarOptions: {
              activeTintColor: ACTIVE_TAB_COLOR,
            },
            tabBarIcon: (tabInfo) => {
              return (
                <FontAwesome5
                  name="car"
                  size={24}
                  color={tabInfo.focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                />
              );
            },
        }}/>
      </Tab.Navigator>
    );
}

export default BottomTabNavigator