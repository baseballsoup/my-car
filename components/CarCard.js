import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { CAR_TYPES } from '../carData'

const CarCard = ({ id, name, miles, type, isSelected, onPress }) => (
  <TouchableOpacity
    activeOpacity={isSelected ? 1 : 0.7}
    onPress={() => onPress(id)}
    style={[
      styles.cardTouchable,
      { borderColor: isSelected ? '#69A6F7' : '#fff' }
    ]}
  >
    <View style={[styles.cardWrap, { opacity: isSelected ? 1 : 0.6 }]}>
      <Text style={styles.header}>{name}</Text>
      <View style={styles.cardBottom}>
        <Text style={styles.miles}>
            {miles}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
)


const styles = StyleSheet.create({
  cardTouchable: {
    borderRadius: 6,
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 18,
    borderWidth: 3,
    borderStyle: 'solid',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }
  },
  cardWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 110
  },
  header: {
    fontSize: 20,
    marginBottom: 4,
    fontWeight: '400'
  },
  cardBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  miles: {
    fontSize: 28,
    fontWeight: '200',
    color: '#666'
  }
})

export default CarCard