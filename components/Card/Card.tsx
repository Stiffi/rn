import * as React from 'react';
import { View } from 'react-native';
import styles from './Card.styles';

interface Props {
    style?: object;
}

const Card: React.FC<Props> = ({ children, style }) => {
    return <View style={{...styles.card, ...style}}>{children}</View>;
};

export default Card;
