import _ from 'lodash'
import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from 'react-native-vector-icons'
import Screen from '../screens/Screen'

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

const Icon = ({ name, focused }) => (
  <Ionicons
    name={name}
    size={30}
    color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
  />
)

export default createBottomTabNavigator(
  {
    TAB_HOME: {
      screen: createStackNavigator({
        Wallet: {
          screen: () => (
            <Screen>
              <Text style={{ textAlign: 'center' }}>Wallet Screen</Text>
            </Screen>
          ),
          path: '/wallet',
          navigationOptions: {
            title: 'Wallet',
            ...headerStyles
          }
        }
      }),
      navigationOptions: {
        tabBarLabel: 'Wallet',
        tabBarIcon: ({ focused }) => <Icon name='ios-wallet' focused={focused} />
      }
    },
    TAB_STATS: {
      screen: createStackNavigator({
        Send: {
          screen: () => (
            <Screen>
              <Text style={{ textAlign: 'center' }}>Send Screen</Text>
            </Screen>
          ),
          path: '/send',
          navigationOptions: {
            title: 'Send',
            ...headerStyles
          }
        }
      }),
      navigationOptions: {
        tabBarLabel: 'Send',
        tabBarIcon: ({ focused }) => <Icon name='ios-send' focused={focused} />
      }
    },
    TAB_MAINTENANCE: {
      screen: createStackNavigator({
        Activities: {
          screen: () => (
            <Screen>
              <Text style={{ textAlign: 'center' }}>Activities Screen</Text>
            </Screen>
          ),
          path: '/activities',
          navigationOptions: {
            title: 'Activities',
            ...headerStyles
          }
        }
      }),
      navigationOptions: {
        tabBarLabel: 'Activities',
        tabBarIcon: ({ focused }) => <Icon name='ios-list' focused={focused} />
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: ACTIVE_TAB_COLOR,
      inactiveTintColor: INACTIVE_TAB_COLOR,
      showLabel: true,
      style: {
        borderTopWidth: 0,
        paddingTop: 3,
        paddingBottom: 4,
        height: 60,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 0 }
      }
    }
  }
)