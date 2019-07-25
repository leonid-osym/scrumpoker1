import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1F313D",
        paddingTop: Platform.OS === 'ios' ? 40 : 0
    },
    divider: {
        height: 1,
        backgroundColor: '#3D5056'
    },
});