import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    vocabulary: Vocabulary
}

const VocabularyCard = (props: Props) => {
    return (
        <View>
            <View style={styles.vocabularyInfoView}>
                <Text style={styles.vocabularyText}>{props.vocabulary?.title}</Text>
                <Text style={styles.vocabularySubText}><Text style={styles.labelText}>Kanji</Text>: {props.vocabulary?.kanji}</Text>
            </View>
            <View style={styles.vocabularyDescView}>
                <Text>{props.vocabulary?.meaning}</Text>
            </View>
        </View>
    )
}

export default VocabularyCard

const styles = StyleSheet.create({
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