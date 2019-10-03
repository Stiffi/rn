import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './Header.styles';

interface Props {
    title: string;
}

const Header: React.FC<Props> = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.header__title}>{title}</Text>
        </View>
    );
};

export default Header;
