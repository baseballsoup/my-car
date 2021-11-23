import React from 'react';
import { Text, View } from 'react-native';

export default function MaintenanceScreen({ route }) {
  const name = route.params.name

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world! Maintenance page for {name} </Text>
    </View>
  )
}