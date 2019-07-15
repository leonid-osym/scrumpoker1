import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default DrawerComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Deck</Text >
            </View>
            <View style={styles.divider} />
            <View style={styles.entryView}>
                <Text style={styles.entryText}>Standard</Text >
            </View>
            <View style={styles.divider} />
            <View style={styles.entryView}>
                <Text style={styles.entryText}>T-Shirt</Text >
            </View>
            <View style={styles.divider} />
            <View style={styles.entryView}>
                <Text style={styles.entryText}>Fibonacci</Text >
            </View>
            <View style={styles.divider} />
            <View style={styles.titleView}>
                <Text style={styles.titleText}>App</Text >
            </View>
            <View style={styles.divider} />
            <View style={styles.entryView}>
                <Text style={styles.entryText}>Settings</Text >
            </View>
            <View style={styles.divider} />
            <View style={styles.entryView}>
                <Text style={styles.entryText}>Rate this app!</Text >
            </View>
            <View style={styles.divider} />
            <View style={styles.entryView}>
                <Text style={styles.entryText}>About</Text >
            </View>
            <View style={styles.divider} />
        </View >)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1F313D"
    },
    titleView: {
        height: '2.5%',
        backgroundColor: '#2B3E4D',
        justifyContent: 'center'
    },
    entryView: {
        height: '5%',
        backgroundColor: '#1F313D',
        justifyContent: 'center'
    },
    divider: {
        height: 1,
        backgroundColor: '#3D5056'
    },
    titleText: {
        marginStart: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white'
    },
    entryText: {
        marginStart: 10,
        fontSize: 16,
        color: 'white'
    }
});