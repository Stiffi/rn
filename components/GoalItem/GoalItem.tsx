import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './GoalItem.styles';

interface Props {
    title: string;
    onDelete: () => void;
}

const GoalItem: React.FC<Props> = ({ title, onDelete }) => {
    return (
        <TouchableOpacity onPress={onDelete}>
            <View style={styles.listItem}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default GoalItem;
