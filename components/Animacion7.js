import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Animated, View } from 'react-native'

/**
 * Animacion que hace que una cajita se mueva y amplie al cargar la app
 */

const Animacion7 = () => {

    const [animacion1] = useState(new Animated.Value(0))
    const [animacion2] = useState(new Animated.Value(1))

    useEffect(() => {
        Animated.sequence([
            Animated.timing(
                animacion1,
                {
                    toValue: 300,
                    duration: 1000
                }
            ),
            Animated.spring(
                animacion2,
                {
                    toValue: 10
                }
            ),
            Animated.spring(
                animacion2,
                {
                    toValue: 1
                }
            ),
            Animated.timing(
                animacion1,
                {
                    toValue: 600,
                    duration: 1000
                }
            )

        ]).start()
    }, [])

    const estiloAnim = {
        transform: [
            { translateY: animacion1 },
            { scale: animacion2 }
        ]

    }

    return (
        <View>
            <Animated.View style={[styles.caja, estiloAnim]}>

            </Animated.View>
        </View>
    )
}

export default Animacion7

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
