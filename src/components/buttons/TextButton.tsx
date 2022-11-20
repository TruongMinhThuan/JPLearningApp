import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'

type Props = {
    label?: string
    labelStyle?: TextStyle
    buttonStyle?: ViewStyle[] | ViewStyle
    onPress?: () => void
}

const TextButton = (props: Props) => {
    return (
        <TouchableOpacity style={[styles.container, props.buttonStyle]} onPress={props.onPress}>
            <Text style={[styles.labelText, props.labelStyle]}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default TextButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        borderRadius: 22,
        padding: 12,
        marginBottom: 8
    },
    labelText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    }
})