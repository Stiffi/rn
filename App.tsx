import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    TextInput,
    View,
    FlatList
} from 'react-native';
import GoalItem from './components/GoalItem/GoalItem';
import GoalInput from './components/GoalInput/GoalInput';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = (enteredGoal: string) => {
        setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
        setIsAddMode(false);
    };

    const removeGoalHandler = index => {
        setCourseGoals(currentGoals =>
            currentGoals.filter((goal, goalIndex) => goalIndex !== index)
        );
    };

    const cancelGoalHandler = () => {
        setIsAddMode(false);
    };

    return (
        <View style={styles.screen}>
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
            <GoalInput onCancel={cancelGoalHandler} visible={isAddMode} onAddGoal={addGoalHandler} />
            <FlatList
                data={courseGoals}
                keyExtractor={(item, index) => index.toString()}
                renderItem={listItem => (
                    <GoalItem
                        onDelete={() => removeGoalHandler(listItem.index)}
                        title={listItem.item}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});
