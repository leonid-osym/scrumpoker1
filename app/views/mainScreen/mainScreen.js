import React, { Component } from 'react';
import { s, SafeAreaView, Animated, Easing } from 'react-native';
import GameView from '../../components/gameView/gameView';
import OpenedCardView from '../../components/openedCardView/openedCardView';
import { styles } from './style';

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowAllCards: true,
        }
        this.cards = [];
        this.rotateCard = new Animated.Value(1);
        this.rotateGame = new Animated.Value(0);
    }

    animationOpenCard = () => {
        Animated.sequence([
            Animated.timing(this.rotateGame, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
            }),
            Animated.timing(this.rotateCard, {
                toValue: 0,
                duration: 1000,
                easing: Easing.linear,
            })
        ]).start()
    };

    setSomeState = () => {
        this.setState({isShowAllCards: false})
    }

    // animationCloseCard = () => {
    //     Animated.sequence([
    //         Animated.timing(this.rotateCard, {
    //             toValue: 0,
    //             duration: 1000,
    //             easing: Easing.linear,
    //         }).start(this.setState((prevState) => { return { isShowAllCards: !prevState.isShowAllCards } })),
    //         Animated.timing(this.rotateGame, {
    //             toValue: 1,
    //             duration: 1000,
    //             easing: Easing.linear,
    //         }).start(),
    //     ])
    // }

    startAnimation = () => {
        // const { isShowAllCards } = this.state;
        // if (isShowAllCards) {
        //     this.animationOpenCard();
        // } else {
        //     this.animationCloseCard();
        // }
        const { isShowAllCards } = this.state;
        if (isShowAllCards) {
            this.animationOpenCard();
            //this.setState({ isShowAllCards: false});
        }

    }

    render() {
        const { isShowAllCards } = this.state;
        const rotateGame = this.rotateGame.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg'],
        });
        const rotateCard = this.rotateCard.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg'],
        });
        return (
            <SafeAreaView style={styles.container}>
                {/* {isShowAllCards ? */}
                    <Animated.View style={{flex: 1, transform: [{ rotateY: rotateGame }] }}>
                        <GameView startAnimation={this.startAnimation} />
                    </Animated.View>
                    <Animated.View style={{ flex: 1, transform: [{ rotateY: rotateCard }] }}>
                        <OpenedCardView />
                    </Animated.View>
                {/* } */}
            </SafeAreaView>
        );
    }
}