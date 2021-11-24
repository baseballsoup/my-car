import React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen({ route, navigation}) {
  const name = route.params.name

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world! Home page for {name}</Text>
    </View>
  )
}