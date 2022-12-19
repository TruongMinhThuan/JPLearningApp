import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RepetitionPracticeControl } from '../components/controls'
import VocabularyCard from '../components/cards/VocabularyCard'

const vocabularyList = [
    {
        id: 1,
        title: 'Hello',
        kanji: 'Heee',
        meaning: 'Xin chao'
    },
    {
        id: 2,
        title: 'Sorry',
        kanji: 'Heee',
        meaning: 'Xin loi'
    },
    {
        id: 3,
        title: 'good morning',
        kanji: 'Heee',
        meaning: 'Chao buoi sang'
    }
]

const RepetionPracticeScreen = () => {

    const [practiceVocabularyList, setPracticeVocabularyList] = useState<any[]>(vocabularyList)
    const [currentPracticeVocabulary, setCurrentPracticeVocabulary] = useState<any>()

    useEffect(() => {
        setPracticeVocabularyList(vocabularyList)
        setCurrentPracticeVocabulary(vocabularyList[0])
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView >
                <View style={styles.practiceInfoView}>
                    <View style={styles.practiceNumberView}>
                        <Text style={styles.practiceNumberText}>1/10</Text>
                    </View>
                    <Text style={styles.prevReviewText}>Last reviewed an hour ago</Text>
                </View>

                <VocabularyCard vocabulary={currentPracticeVocabulary} />
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

})