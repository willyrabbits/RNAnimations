import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from 'react-native'

/**
 *  Cuando se pulsa un boton este se encoje y vuelve a su tamaño natural
 */

const Animacion5 = () => {

    const [animacion] = useState(new Animated.Value(1))

    const pressBtn = () => {
        Animated.spring(
            animacion,
            {
                toValue: .8
            }
        ).start()
    }
    const releaseBtn = () => {
        Animated.spring(
            animacion,
            {
                toValue: 1,
                friction: 4, // mas bajo mayor rebote. default 7
                tension: 50
            }
        ).start()
    }

    const estiloAnimacio = {
        transform: [{ scale: animacion }]
    }

    return (
        <View style={styles.contenedor}>
            <TouchableWithoutFeedback
                onPressIn={() => pressBtn()}
                onPressOut={() => releaseBtn()}
            >
                <Animated.View style={[styles.btn, estiloAnimacio]}>
                    <Text style={styles.text}>LOG IN</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View >
    )
}

export default Animacion5

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }
})
