import * as React from 'react';
import { Button, Modal, TextInput, View } from 'react-native';
import styles from './GoalInput.styles';
import { useState } from 'react';

interface Props {
    onAddGoal: (newGoal: string) => void;
    visible: boolean;
    onCancel: () => void;
}

const GoalInput: React.FC<Props> = ({ onAddGoal, visible, onCancel }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={visible} animationType={'slide'}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonsWrp}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel} color="red" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;
