import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'black',
    },
    gameViewAnimated: {
        position: 'absolute', 
        width: '100%', 
        height: '100%',
    },
    cardViewAnimated: {
        position: 'absolute', 
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    darkCard: { 
        position: 'absolute', 
        width: '100%', 
        height: '100%' 
    }
});
