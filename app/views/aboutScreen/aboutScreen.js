import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LogoWizards from '../../img/svg/LogoWizards';

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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: 'black' }}>
                <Text style={{ color: '#fff', fontSize: 30, marginTop: 20, marginBottom: 100 }}>Scrum Poker</Text>
                <Text style={{ color: '#fff', fontSize: 28 }}>From</Text>
                <LogoWizards width={330} height={70}/>
                <Text style={{ color: '#fff', fontSize: 28 }}>with ❤️</Text>
                <Text style={{ color: '#fff', marginTop: 15, fontSize: 23 }}>developer: Leonid Osym</Text>
            </View>
        );
    }
}

