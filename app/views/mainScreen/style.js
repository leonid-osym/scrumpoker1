import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'black',
    },
    gameViewAnimated: {
        marginTop: Platform.OS==='ios' ? 40 : 0,
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
    cardView: {
        justifyContent: 'center',
        alignItems: 'center',
        //borderColor: 'white',
        //borderWidth: 6,
        backgroundColor: '#00799f',
        borderRadius: 40,
        width:300,
        height:'80%'
    },
    darkCard: { 
        position: 'absolute', 
        width: '100%', 
        height: '100%' 
    },
    circleButton: {
        position: 'absolute',
        backgroundColor: '#0E1C25',
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: '#3D5056',
        borderWidth: 2,
        top:600
    } 
});
