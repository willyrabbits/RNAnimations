import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from 'react-native'

/**
 * Home made spinner
 */

const Animacion6 = () => {

    const [animacion1] = useState(new Animated.Value(0))
    const [animacion2] = useState(new Animated.Value(-50))

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    animacion2,
                    {
                        toValue: -30,
                        duration: 0
                    }
                ),
                Animated.timing(
                    animacion1,
                    {
                        toValue: 60,
                        duration: 500
                    }
                ),
                Animated.timing(
                    animacion2,
                    {
                        toValue: 30,
                        duration: 500
                    }
                ),
                Animated.timing(
                    animacion1,
                    {
                        toValue: 0,
                        duration: 500
                    }
                ),
                Animated.timing(
                    animacion2,
                    {
                        toValue: -30,
                        duration: 500
                    }
                )
            ])
        ).start()
    }, [])

    const estiloAnim = {
        transform: [
            { translateY: animacion1 },
            { translateX: animacion2 },
        ]
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Animated.View
                style={[
                    styles.caja,
                    estiloAnim
                ]}
            >

            </Animated.View>
        </View >
    )
}

export default Animacion6

const styles = StyleSheet.create({
    caja: {
        width: 10,
        height: 10,
        backgroundColor: 'cornflowerblue'
    }
})
