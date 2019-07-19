import React, { Component } from 'react';
import { View } from 'react-native';

export default class AboutScreen extends Component {

    static navigationOptions = {
        title: 'About',
        headerStyle: {
            backgroundColor: '#1F313D',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'normal',
        },
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch', backgroundColor: '#000' }}>
            </View>
        );
    }
}

