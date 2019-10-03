import * as React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './StartGameScreen.styles';
import Card from '../../components/Card/Card';

const StartGameScreen: React.FC = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.input__container}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttons__container}>
                    <View style={styles.button}>
                        <Button title="Reset" onPress={() => {}} color="#c717fc" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" onPress={() => {}} color="#f7287b" />
                    </View>
                </View>
            </Card>
        </View>
    );
};

export default StartGameScreen;
