import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

/**
 * Rota la caja 360 grados al cargar la app
 */

const Animacion4 = () => {

    const [animacion] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animacion, {
            toValue: 360,
            duration: 1000
        }
        ).start()
    }, [])

    const interpolacion = animacion.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    })

    const estiloAnimacion = {
        transform: [{ rotate: interpolacion }]
    }

    return (
        <Animated.View style={[styles.caja, estiloAnimacion]}>
        </Animated.View>
    )
}

export default Animacion4

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
