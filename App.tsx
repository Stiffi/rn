import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    TextInput,
    View,
    FlatList
} from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="Add" onPress={addGoalHandler} />
            </View>
            <FlatList
                data={courseGoals}
                renderItem={listItem => (
                    <View key={listItem.index} style={styles.listItem}>
                        <Text>{listItem.item}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: '#000000',
        borderWidth: 1,
        padding: 10
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#cccccc',
        borderColor: '#000000',
        borderWidth: 1
    }
});
