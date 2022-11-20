import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextButton } from '../buttons'

const RepetitionPracticeControl = () => {
    return (
        <View style={styles.container}>
            <View style={styles.functionButtonsView}>
                <TextButton label='Previous' />
                <TextButton label='Play Audio' />
                <TextButton label='Edit' />
                <TextButton label='More' />
            </View>
            <View>
                <TextButton label='Show Answer' />
            </View>

            <View>
                <Text>How well do you memorize it?</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextButton buttonStyle={[styles.levelButton, { backgroundColor: 'red' }]} label='3 minutes' />
                    <TextButton buttonStyle={[styles.levelButton, { backgroundColor: 'orange' }]} label='12 minutes' />
                    <TextButton buttonStyle={[styles.levelButton, { backgroundColor: 'green' }]} label='3 hours' />
                    <TextButton buttonStyle={[styles.levelButton, { backgroundColor: 'blue' }]} label='1 day' />
                </View>

            </View>
        </View>
    )
}

export default RepetitionPracticeControl

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 20
    },
    functionButtonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8
    },
    levelButton: {
        padding: 8,
        marginHorizontal: 2
    }
})