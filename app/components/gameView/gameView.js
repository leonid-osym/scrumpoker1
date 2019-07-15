import React, { Component } from 'react';
import { Animated, View, StyleSheet, Easing } from 'react-native';
import CardView from '../../components/cardView/cardView';

export default class GameView extends Component {

    constructor(props) {
        super(props);
        this.cards = [];
        this.generateCards(15);
        this.tempCard = null;
        this.rotateValueHolder = new Animated.Value(0);
        //this.startRotateFunction();

    }

    componentDidMount() {
        this.startRotateFunction();
    }

    startRotateFunction() {
        if (this.tempCard) {
            this.rotateValueHolder.setValue(0);
            Animated.timing(this.rotateValueHolder, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
            }).start(() => this.startRotateFunction());
            this.tempCard = null;
        }
    }

    generateCards = (number) => {
        for (i = 0; i < number; i++) {
            this.cards.push(i);
        }
    }

    onClick = (index) => {
        this.tempCard = index;
        this.startRotateFunction();
    }

    render() {
        const rotateData = this.rotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['360deg', '0deg'],
            //outputRange: ['0deg', '90deg'],
        });
        return (
            <Animated.View style={{ ...styles.mainView, transform: [{ rotateY: rotateData }] }} >
                {this.cards.map((item, index) => <CardView key={index} item={item} onClick={this.onClick} />)}
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor: 'black',
    },
});
