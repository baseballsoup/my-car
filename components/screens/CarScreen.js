
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Screen from '../Screen'
import CarCard from '../CarCard'
import { CAR_DATA } from '../../carData'
import { useNavigation } from '@react-navigation/native';

const CarScreen = ( props ) => {
    const navigation = useNavigation();
    const cars = CAR_DATA
   
    const selectedCarId = cars[0].id
    const car = cars.find(w => w.id === selectedCarId)
    

    const handleSelectCarCard = id => {
        navigation.navigate('Home')
    }

    return (
        <Screen scrollEnabled= 'true'>
            <Screen style={styles.carCardWrap}>
            {cars.map(w => (
                <CarCard
                key={w.id}
                id={w.id}
                name={w.name}
                miles={w.miles}
                type={w.type}
                isSelected={w.id === selectedCarId}
                onPress={handleSelectCarCard}
                />
            ))}
            </Screen>
        </Screen>

    )
    }

    const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: '#fff',
        marginVertical: 8,
        padding: 24,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 }
    },
    carCardWrap: {
        ...StyleSheet.absoluteFillObject,
    },
})

export default CarScreen