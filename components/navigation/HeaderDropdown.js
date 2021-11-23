import React, { useState } from "react";
import { Ionicons } from 'react-native-vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ACTIVE_TAB_COLOR = '#69A6F7'

const HeaderDropdown = () => {

  const [isVisible, setIsVisible] = useState(false);
  const toggleIsVisible = () => {
    setIsVisible(isVisible => !isVisible);
  }

  return (
      <TouchableOpacity
        style={styles.button}
        activeOpacity={1}
        onPress={toggleIsVisible}
      > 
        <View style={styles.textWrap}>
          <Text style={styles.text}>Press Here</Text>
          <View style={styles.iconWrap}>
            <Ionicons
              name={isVisible ? 'ios-arrow-up' : 'ios-arrow-down'}
              color={'white'}
              size={20}
            />
          </View>
        </View>
      </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  textWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  iconWrap: {
    marginLeft: 3
  },
  container: {
    justifyContent: "center",
    backgroundColor: ACTIVE_TAB_COLOR,
  },
  button: {
    alignItems: "center",
    backgroundColor: "transparent",
    paddingTop: 60,
    padding: 15,
    backgroundColor: ACTIVE_TAB_COLOR,
  }
})
export default HeaderDropdown;