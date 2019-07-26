import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0E1C25",
        paddingTop: Platform.OS === 'ios' ? 40 : 0
    },
    divider: {
        height: 1,
        backgroundColor: '#36484d'
    },
});