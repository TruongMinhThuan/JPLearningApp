import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextButton } from '../components/buttons'
import { _refRootNavigation } from '../navigation/RootNavigation'


const LearnStartScreen = () => {
    const showRepetitionPracticeScreen = () => {
        _refRootNavigation.navigate('RepetitionPracticeScreen')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.titleText}>Spaced repetion</Text>
                <Text style={styles.subTitleText}>Schedulings system</Text>
            </View>

            <View style={styles.controlButtonGroup}>
                <TextButton label='Start Review' onPress={showRepetitionPracticeScreen} />
                <TextButton label='Settings' />
                <TextButton label='FAQ' />
            </View>

        </SafeAreaView>
    )
}

export default LearnStartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        marginVertical: 60
    },
    titleText: {
        fontSize: 22,
        textAlign: 'center'
    },
    subTitleText: {
        fontSize: 12,
        textAlign: 'center',
        color: 'gray'
    },
    controlButtonGroup: {
        paddingHorizontal: 20
    }
})