import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import GameView from '../../components/gameView/gameView';

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.cards = [];
    }

    componentDidMount() {
    }   

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <GameView/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
     },
  });
