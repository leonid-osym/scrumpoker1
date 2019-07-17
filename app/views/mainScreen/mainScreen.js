import React, { Component } from 'react';
import { SafeAreaView, Animated, Easing, TouchableOpacity } from 'react-native';
import GameView from '../../components/gameView/gameView';
import OpenedCardView from '../../components/openedCardView/openedCardView';
import { styles } from './style';

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowAllCards: true,
            item: '',
            mainCardShown: false,
            changeCardBackground: false,
            isHideCard: false,
        }
        this.cards = [];
        this.rotateGame = new Animated.Value(0);
        this.rotateCard = new Animated.Value(0);
    }

    onGameCardClick = (item) => {
        const { mode } = this.props;
        const { isShowAllCards } = this.state;
        this.setState({ item: item });
        if (mode === 'hide') {
            isShowAllCards ? this.animationOpenCardModeGide() : this.animationCloseCardModeGide();
        } else {
            isShowAllCards ? this.animationOpenCard() : this.animationCloseCard();
        }
    }

    animationOpenCard = () => {
        this.rotateGame.setValue(0);
        this.rotateCard.setValue(0);
        Animated.sequence([
            Animated.timing(this.rotateGame, { toValue: 1, duration: 500, easing: Easing.linear, useNativeDriver: true }),
            Animated.timing(this.rotateCard, { toValue: 1, duration: 500, easing: Easing.linear, useNativeDriver: true })
        ]).start();
        this.setState({ isShowAllCards: false })
    }

    animationCloseCard = () => {
        Animated.sequence([
            Animated.timing(this.rotateCard, { toValue: 2, duration: 500, easing: Easing.linear, useNativeDriver: true }),
            Animated.timing(this.rotateGame, { toValue: 2, duration: 500, easing: Easing.linear, useNativeDriver: true })
        ]).start();
        this.setState({ isShowAllCards: true })
    }

    animationOpenCardModeGide = () => {
        this.rotateGame.setValue(0);
        this.rotateCard.setValue(0);
        Animated.timing(this.rotateGame, { toValue: 1, duration: 500, easing: Easing.linear, useNativeDriver: true }).start();
        this.setState({ isShowAllCards: false, isHideCard: true })
    }

    animationCloseCardModeGide = () => {
        Animated.sequence([
            Animated.timing(this.rotateCard, { toValue: 2, duration: 500, easing: Easing.linear, useNativeDriver: true }),
            Animated.timing(this.rotateGame, { toValue: 2, duration: 500, easing: Easing.linear, useNativeDriver: true })
        ]).start();
        this.setState({ isShowAllCards: true })
    }

    showCard = () => {
        this.setState({ isHideCard: false });
        Animated.timing(this.rotateCard, { toValue: 1, duration: 500, easing: Easing.linear, useNativeDriver: true }).start()
    }

    render() {
        const { item, isHideCard } = this.state;
        const rotateGame = this.rotateGame.interpolate({
            inputRange: [0, 1, 2],
            outputRange: ['0deg', '90deg', '0deg'],
        });
        const rotateCard = this.rotateCard.interpolate({
            inputRange: [0, 1, 2],
            outputRange: ['-90deg', '0deg', '-90deg'],
        });
        return (
            <SafeAreaView style={styles.container}>
                <Animated.View style={{ ...styles.gameViewAnimated, transform: [{ rotateY: rotateGame }] }}>
                    <GameView onGameCardClick={this.onGameCardClick} />
                </Animated.View>
                <Animated.View style={{ ...styles.cardViewAnimated, transform: [{ rotateY: rotateCard }] }}>
                    <OpenedCardView item={item} onMainCardClick={this.onGameCardClick} />
                </Animated.View>
                {isHideCard ? <TouchableOpacity style={styles.darkCard} onPress={this.showCard} /> : null}
            </SafeAreaView>
        );
    }
}

