import React, { Component } from 'react';
import { Platform, TouchableOpacity, Text, View, Switch, StyleSheet } from 'react-native';

export default class SettingsScreen extends Component {

    static navigationOptions = {
        title: 'Settings',
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
        this.state = {
            switchButtonValue: true
        }
    }



    render() {
        const {switchButtonValue} = this.state;
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch', backgroundColor: '#000' }}>
                <TouchableOpacity >
                    <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch' }}>
                        <Text style={{ margin: 5, marginLeft: '20%', color: '#fff' }}>Tap to reveal</Text>
                        <Switch
                            onValueChange={(value) => this.setState({ switchButtonValue: value })}
                            trackColor={{ true: '#7ab8e1', false: Platform.OS=='android'?'#d3d3d3'  }}
                            thumbColor={[Platform.OS=='ios'?'#FFFFFF':(switchButtonValue ?'#7ab8e1':'#ffffff')]}
                            ios_backgroundColor="#fbfbfb"
                            style={{ marginBottom: 10 }}
                            //thumbColor="#257CB1"
                            //tintColor="#12303B"
                            style={[switchButtonValue ? inline_styles.switchEnableBorder : inline_styles.switchDisableBorder]}
                            value={switchButtonValue}
                            />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const inline_styles = StyleSheet.create({
    switchEnableBorder: {
    borderColor: '#6fa6d3',
    borderWidth: 1},
    
    switchDisableBorder: {
    borderColor: '#f2f2f2',
    borderWidth: 1,  },});

