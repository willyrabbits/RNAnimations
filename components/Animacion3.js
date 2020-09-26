import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

/**
 * Animamos el FONT SIZE  al cargar la app
 */

const Animacion3 = () => {

    const [animacion] = useState(new Animated.Value(14))

    useEffect(() => {
        Animated.timing(
            animacion, {
            toValue: 40,
            duration: 500
        }
        ).start()
    }, [])

    return (
        <View>
            <Animated.Text style={[styles.texto, { fontSize: animacion }]}>
                ANIMATION JUAN
            </Animated.Text>
        </View>
    )
}

export default Animacion3

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})
