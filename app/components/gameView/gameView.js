import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CardView from '../../components/cardView/cardView';

export default class GameView extends Component {

    constructor(props) {
        super(props);
        this.cards = [];
        this.generateCards(15);
    }

    componentDidMount() {
    }

    generateCards = (number) => {
        for (i = 0; i < number; i++) {
            this.cards.push(i);
        }
    }

    onClick = () => {

    }

    render() {
        return (
            <View style={styles.mainView}>
                {this.cards.map((item, index) => <CardView key={index} item={item} onClick={this.onClick} />)}
            </View>
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
