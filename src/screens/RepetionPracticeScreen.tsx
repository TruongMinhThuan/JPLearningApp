import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RepetitionPracticeControl } from '../components/controls'

const RepetionPracticeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView >
                <View style={styles.practiceInfoView}>
                    <View style={styles.practiceNumberView}>
                        <Text style={styles.practiceNumberText}>1/10</Text>
                    </View>
                    <Text style={styles.prevReviewText}>Last reviewed an hour ago</Text>
                </View>

                <View>
                    <View style={styles.vocabularyInfoView}>
                        <Text style={styles.vocabularyText}>voca</Text>
                        <Text style={styles.vocabularySubText}><Text style={styles.labelText}>Kanji</Text>: dasda</Text>
                    </View>
                    <View style={styles.vocabularyDescView}>
                        <Text>to comprise, to account for</Text>
                    </View>
                </View>
            </ScrollView>
            <RepetitionPracticeControl />
        </SafeAreaView>
    )
}

export default RepetionPracticeScreen

const styles = StyleSheet.create({
    practiceInfoView: {
        alignItems: 'center',
        marginVertical: 22
    },
    practiceNumberView: {
        borderWidth: 2,
        borderRadius: 20,
        width: 60,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderColor: 'gray'
    },
    practiceNumberText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'gray'
    },
    prevReviewText: {
        fontSize: 12,
        color: 'gray',
        marginVertical: 4
    },
    vocabularyInfoView: {
        backgroundColor: 'lightgrey',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginHorizontal: 8,
        padding: 10
    },
    vocabularyDescView: {
        backgroundColor: 'lightgrey',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        marginHorizontal: 8,
        padding: 10,
        marginTop: 2
    },
    vocabularyText: {
        fontSize: 22,
        fontWeight: '600',
        color: '#333333',
        marginVertical: 4,
    },
    vocabularySubText: {
        color: '#333',
        marginBottom: 8
    },
    labelText: {
        fontWeight: '800',
        color: '#333333',
    }
})