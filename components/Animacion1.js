import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

/**
 * Animacion que hace que el titulo haga FADE IN al cargar la app
 */

const Animacion1 = () => {

    const [animacion] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animacion, {
            toValue: 1,
            duration: 500
        }
        ).start()
    }, [])

    return (
        <Animated.View style={{ opacity: animacion }}>
            <Text style={styles.texto}>ANIMATION ONE</Text>
        </Animated.View>
    )
}

export default Animacion1

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})
