import { StyleSheet } from "react-native";

export default StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: '#000000',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonsWrp: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        width: '40%'
    }
})
