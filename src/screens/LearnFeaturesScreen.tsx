import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LearnFeatureItem } from '../components/items'
import { _refRootNavigation } from '../navigation/RootNavigation'

const LearnFeaturesScreen = () => {

    const showLearnStartScreen = () => {
        _refRootNavigation.navigate('LearnStartScreen')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Feature management</Text>
            <ScrollView >
                <LearnFeatureItem title='Spaced repetion' subTitle='Schedulings system' onPress={showLearnStartScreen} />
                <LearnFeatureItem title='Writing' subTitle='Schedulings system' onPress={showLearnStartScreen} />
                <LearnFeatureItem title='Quiz' subTitle='Schedulings system' onPress={showLearnStartScreen} />
            </ScrollView>
        </View>
    )
}

export default LearnFeaturesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    titleText: {
        textAlign: 'center',
        marginVertical: 22,
    }
})