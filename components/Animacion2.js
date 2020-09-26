import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

/**
 * La caja crece hasta 450 de alto y ancho en 1 segundo al cargar la app
 */

const Animacion2 = () => {

    const [animacion] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animacion, {
            toValue: 450,
            duration: 1000
        }
        ).start()
    }, [])

    return (
        <Animated.View style={[styles.caja, { width: animacion, height: animacion }]}>
        </Animated.View>
    )
}

export default Animacion2

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
