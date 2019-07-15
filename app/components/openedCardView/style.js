import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    textStyle: {
        fontSize: 100,
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 65
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    cardView: {
        borderColor: 'white',
        borderWidth: 6,
        backgroundColor: 'steelblue',
        borderRadius: 40,
        width:300,
        height:'100%'
    },
    cardViewDark: {
        backgroundColor: 'black',
    }
});
