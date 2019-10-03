import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    input__container: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttons__container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: '45%'
    }

})
