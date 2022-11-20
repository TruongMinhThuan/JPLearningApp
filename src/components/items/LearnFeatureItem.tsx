import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
    title?: string
    subTitle?: string
    iconSource?: any
    onPress?: () => void
}
const LearnFeatureItem = (props: Props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.subTitleText}>{props.subTitle}</Text>

        </TouchableOpacity>
    )
}

export default LearnFeatureItem

const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8
    },
    titleText: {
        fontSize: 22,
        textAlign: 'center'
    },
    subTitleText: {
        fontSize: 12,
        textAlign: 'center',
        color: 'gray'
    }
})