import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    entryView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //backgroundColor: '#1F313D',
    },
    entryText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        marginStart: 10,
        fontSize: 20,
        color: 'white'
    },
    icon: {
        marginStart: 10
    },
    touchOpacity: {
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        height: '7%',
    }
});